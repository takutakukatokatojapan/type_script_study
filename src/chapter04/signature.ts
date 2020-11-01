// 呼び出しシグニチャの型を定義する
// この型定義ではデフォルト値を表現することはできない
type LogType = (message: string, userID?: string) => void

let logType: LogType = (
  // すでに呼び出しシグニチャで定義されているため、
  // パラメータに再度型付けする必要はない
  message,
  userID = 'Not signed in'
) => {
  let time = new Date().toISOString()
  console.log(time, message, userID)
}