import React from 'react'
import './App.css'
import { Table } from './components/Table'
const CLASSES = [
  { name: 'A1', id: 10 },
  { name: 'A2', id: 11 },
  { name: 'B1', id: 20 },
]
const INITIAL_STUDENTS = [
  { id: 1, name: 'Bob', className: 'A1' },
  { id: 2, name: 'Amy', classId: 20 },
]
function App() {
  const [students, setStudents] = React.useState(INITIAL_STUDENTS)
  const addStudent = () => {
    // ここで 生徒の追加を行う
    setStudents()
  }
  const deleteStudent = () => {
    // ココで生徒の削除を行う処理
    setStudents()
  }
  console.log(students)
  return (
    <div className='App'>
      <div>
        {/** ここで生徒の情報を追加するためのフィールドを用意 */}
        <div>
          <input type='text' placeholder='userName' onChange={addStudent} />
        </div>
        <button onClick={addStudent}>Add student</button>
      </div>
      <Table deleteStudent={deleteStudent} students={students} />
    </div>
  )
}
export default App