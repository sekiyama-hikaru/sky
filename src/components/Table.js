import React from 'react'
import { Button } from './Button'
export const Table = (props) => {
  /** ボタンにクリ�?クしたとき�?�処�?を渡してあげ�? */
  /** Student�? Loop 処�?を使�?ながら表示してあげる�?要あ�? */
  return (
    <table>
      <tr>
        <th>Student Name</th>
        <th>Action</th>
      </tr>
      <tr>
        <td>Student1</td>
        <Button
          onClick={() => {
            console.log('CLICKED')
          }}
          title='削除'
        />
      </tr>
      <tr>
        <td>Student2</td>
        <Button
          onClick={() => {
            console.log('CLICKED')
          }}
          title='削除'
        />
      </tr>
      <tr>
        <td>Student3</td>
        <Button
          onClick={() => {
            console.log('CLICKED')
          }}
          title='削除'
        />
      </tr>
    </table>
  )
}