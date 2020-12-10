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
    // ������ ���k�̒ǉ����s��
    setStudents()
  }
  const deleteStudent = () => {
    // �R�R�Ő��k�̍폜���s������
    setStudents()
  }
  console.log(students)
  return (
    <div className='App'>
      <div>
        {/** �����Ő��k�̏���ǉ����邽�߂̃t�B�[���h��p�� */}
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