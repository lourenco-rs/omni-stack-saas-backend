'use strict'

/*
https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings
*/

const Conta = use('App/Models/Conta')
const Database = use('Database')

const readline = require('readline')
const fs = require('fs')
const iconv = require('iconv-lite')

const importarPlanoDeContas = async function (pathFile) {
  console.log('no topo de importatPlanoDeContas')

  const readable = fs.createReadStream(pathFile)

  const rl = readline.createInterface({
    input: readable
      .pipe(iconv.decodeStream('latin1')) // LATIN1 / win1252 / ISO-8859-1 / binary (alias for latin1)
      .pipe(iconv.encodeStream('utf8'))
  })

  let contas = []

  rl.on('line', line => {
    const id = parseInt(line.substring(0, 7))
    const conta = line.substring(7, 27).trim()
    const descricao = line.substring(27, 67).trim()
    const tipo = line.substring(67, 68)

    contas.push({
      id,
      conta,
      descricao,
      tipo
    })
  }).on('close', () => {
    contas.pop() // a última é uma linha invalida, somente com 9999...
    insereDados(contas)
  })
}

async function insereDados (contas) {
  const trx = await Database.beginTransaction()

  try {
    await Conta.createMany(contas, trx)
    await trx.commit()
  } catch (error) {
    await trx.rollback()
  }
}

module.exports = importarPlanoDeContas
