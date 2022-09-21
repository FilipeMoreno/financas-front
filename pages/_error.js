function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `Ocorreu um erro ${statusCode} no servidor.`
        : 'Ocorreu um erro no cliente.'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 400

  return { statusCode }
}

export default Error
