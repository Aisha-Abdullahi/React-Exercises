import React, {useState, useMemo} from 'react'

export default function FilteredList() {
    const list =[
        { id: 1, name: 'Aisha', age: '12' },
        { id: 2, name: 'Abdullahi', age: '23' },
        { id: 3, name: 'Boya', age: '34' },
        { id: 4, name: 'Muadh', age: '84' },
      ];

      const filteredList = useMemo(() => {
        return list.filter(item => item.age > 18);
      }, [list]);
    
  return (
    <div style={{display: 'flex', justifyContent:'center'}}>

    <div style={{display: 'flex', flexDirection: 'column', width:'50%'}}>
    <h1>List</h1>
    {list.map(item =>(
            <li key={item.id}>ID: {item.id} <br/> 
            Name: {item.name}<br/>
            Age: {item.age}</li>
      ))}
    </div>
    <div style={{display: 'flex', flexDirection: 'column', width:'50%'}}>
      <h2>Filtered List</h2>
      {filteredList.map(item =>(
            <li key={item.id}>ID: {item.id} <br/> 
            Name: {item.name}<br/>
            Age: {item.age}</li>
      ))}
      </div>
    </div>
  )
}
