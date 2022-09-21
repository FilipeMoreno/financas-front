export default function AuthIndex() {
  return <></>
}

export const getServerSideProps = async ctx => {
  return {
    redirect: {
      destination: '/auth/login',
      permanent: false
    }
  }
}
