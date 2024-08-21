const initial = {name: 'Sam', age: 30};

type InitialType = {name: string, age: number};

const App = () => {
  return (
    <div>
      <PrintBornYear data={initial}/>
    </div>
  )
}

type PrintBornYearProps = {data: InitialType};

const PrintBornYear = ({data}: PrintBornYearProps) => {
  const getBornYear = () => new Date().getFullYear() - data.age;
   
  return (
    <>
      <p>Hello {data.name}, you are {data.age} years old</p>
      <p>So you were probably born in {getBornYear()}</p>
    </>
  )
}


export default App