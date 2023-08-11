import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
  UserPoolId: 'us-east-1_0Kfg1xxL8',
  ClientId: '2dgv8qto1je2bnce10gu2a2arm'
}

const cognitoUserPool = new CognitoUserPool(poolData)

export default cognitoUserPool
