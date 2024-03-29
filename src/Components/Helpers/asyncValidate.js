const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values) => {
  return sleep(1000).then(() => {
    if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
      throw { email: 'Email already Exists' }
    }
  })
}

export default asyncValidate