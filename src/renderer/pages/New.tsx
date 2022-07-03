import React, { useState } from 'react'
const fs = window.require('fs')
import './New.css'

const New = () => {
  const [data, setData] = useState({
    name: '',
    description: '',
    type_source: '',
    source: '',
    ddbbHost: '',
    ddbbPort: 3306,
    ddbbUser: '',
    ddbbPassword: '',
    ddbbName: '',
    ddbbTunnel: false,
    tunnelHost: '',
    tunnelPort: 22,
    tunnelUsername: '',
    tunnelPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value)
    if (e.target.name === 'ddbbTunnel') {
      setData({
        ...data,
        [e.target.name]: e.target.checked
      })
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = (e: MouseEventHandler<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(data)
    const fileName = `./datafixes/${data.name}.json`
    fs.writeFile(fileName, JSON.stringify(data), (err: Error) => {
      if (err) throw err
      console.log('The file has been saved!')
    })
  }

  console.log(data)

  return (
    <div>
      <h1>Create new Datafix</h1>
      <form>
        <label>
          Name:
          <input type='text' name='name' value={data.name} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type='text' name='description' value={data.description} onChange={handleChange} />
        </label>
        <label>
          Source:
          <input type='radio' id='html' name='type_source' value='FILE' checked={data.type_source === 'FILE'} onChange={handleChange} />
          <label>File</label>
          <input type='radio' id='css' name='type_source' value='BBDD' checked={data.type_source === 'BBDD'} onChange={handleChange} />
          <label>DDBB</label>
        </label>
        {data.type_source === 'FILE' && (
          <label>
            Source:
            <input type='file' accept='.csv' name='source' value={data.source} onChange={handleChange} />
          </label>
        )}
        {data.type_source === 'BBDD' && (
          <>
          <label>
            Host:
            <input type='text' name='ddbbHost' value={data.ddbbHost} onChange={handleChange} />
          </label>
          <label>
            Host:
            <input type='number' name='ddbbPort' value={data.ddbbPort} onChange={handleChange} />
          </label>
          <label>
            User:
            <input type='text' name='ddbbUser' value={data.ddbbUser} onChange={handleChange} />
          </label>
          <label>
            Password:
            <input type='password' name='ddbbPassword' value={data.ddbbPassword} onChange={handleChange} />
          </label>
          <label>
            Name:
            <input type='text' name='ddbbName' value={data.ddbbName} onChange={handleChange} />
          </label>
          <label>
            Tunnel
            <input type='checkbox' name='ddbbTunnel' value='S' onChange={handleChange} />
          </label>
          {data.ddbbTunnel && (
            <>
            <label>
              Host:
              <input type='text' name='tunnelHost' value={data.tunnelHost} onChange={handleChange} />
            </label>
            <label>
              Port:
              <input type='text' name='tunnelPort' value={data.tunnelPort} onChange={handleChange} />
            </label>
            <label>
              Username:
              <input type='text' name='tunnelUsername' value={data.tunnelUsername} onChange={handleChange} />
            </label>
            <label>
              Password:
              <input type='password' name='tunnelPassword' value={data.tunnelPassword} onChange={handleChange} />
            </label>
            </>
          )}
          </>
        )}
        <button onClick={handleSubmit}>Create</button>
      </form>
    </div>
  )
}

export default New
