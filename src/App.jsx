import './App.css';
import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'




function App() {
  const [currVal, setCurrVal] = useState("")
  const changeVal = (val) => {
    setCurrVal(currVal.concat(val.target.name))

  }
  const clear = () => {
    setCurrVal('')
  }
  const result = () => {
    setCurrVal(eval(currVal).toString())
  }

  return (
    <div >

      <Table className="calculator" variant="dark" bordered style={{ borderColor: 'white', borderRadius: '10' }}>
        <tbody>

          <tr ><th colSpan='2'><input style={{ textAlign: 'right' }} type="text" readOnly value={currVal} /></th>
            <th colSpan='2'><h5><i>Calculator</i></h5></th>
          </tr>
          <tr >

            <td colSpan='2'><div variant='dark' onClick={clear} id="clear">Clear</div></td>
            <td></td>
            <td> <Button variant='warning' name="/" onClick={changeVal}>÷</Button></td>
          </tr>
          <tr>

            <td> <Button variant='dark' name="7" onClick={changeVal} >7</Button></td>
            <td> <Button variant='dark' name="8" onClick={changeVal} >8</Button></td>
            <td><Button variant='dark' name="9" onClick={changeVal} >9</Button></td>
            <td> <Button variant='warning' name="*" onClick={changeVal}>×</Button></td>
          </tr>
          <tr>
            <td><Button variant='dark' name="4" onClick={changeVal}>4</Button></td>
            <td><Button variant='dark' name="5" onClick={changeVal}>5</Button></td>
            <td> <Button variant='dark' name="6" onClick={changeVal}>6</Button></td>
            <td><Button variant='warning' name="-" onClick={changeVal}>−</Button></td>
          </tr>
          <tr>
            <td><Button variant='dark' name="1" onClick={changeVal}>1</Button></td>
            <td><Button variant='dark' name="2" onClick={changeVal}>2</Button></td>
            <td><Button variant='dark' name="3" onClick={changeVal}>3</Button></td>
            <td><Button variant='warning' name="+" onClick={changeVal}>+</Button></td>
          </tr>
          <tr>
            <td> <Button variant='dark' name='0' onClick={changeVal}>0</Button></td>
            <td><Button variant='dark' name='.' onClick={changeVal}>.</Button></td>

            <td colSpan='2'><div variant="success" onClick={result} id="result"><i>Equals</i></div></td>
          </tr>
        </tbody>

      </Table>
    </div>
  );
}

export default App;
