import React, { useState, useEffect, useMemo } from 'react'

const TabB = ({ redirectTab }) => {
  const [valueB, setValueB] = useState("");
  const [arrayA, setArrayA] = useState([...Array(10)]);
  const [arrayB, setArrayB] = useState([...Array(10)]);
   // Mounting
   useEffect(() => {
    console.log('Mới vào render lần đầu tiên B')
  }, [])

  useEffect(() => {
    if (redirectTab) setValueB('Ahihi ahoho')
  }, [redirectTab])

   // UnMounting
   useEffect(() => {
     return () => {
       console.log('Rời khỏi B')
     }
  }, [])
  
  const renderListA = useMemo(() => {
    return arrayA.map((item, index) => {
      console.log('🚀 ~ file: TabB.jsx ~ line 31 ~ renderListA ~ renderListA');
      return (
        <div>Item - {index + 1}</div>
      )
    })
  }, [arrayA])
  console.log('🚀 ~ file: TabB.jsx ~ line 31 ~ renderListA ~ renderListA', renderListA);

  const renderListB = useMemo(() => {
    return arrayB.map((item, index) => {
      console.log('🚀 ~ file: TabB.jsx ~ line 40 ~ renderListB ~ renderListB');
      return (
        <div>Item - {index + 1}</div>
      )
    })
  }, [arrayB])

  return (
    <div>
      TabB
      <input
        type="text"
        onChange={(e) => setValueB(e.target.value)}
        value={valueB}
      />
      <div>A</div>
      {renderListA}
      <div>B</div>
      {renderListB}
    </div>
  )
}

export default TabB
