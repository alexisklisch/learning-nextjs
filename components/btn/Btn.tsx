export function Btn({ onClick }) {
  return <>
    <button onClick={onClick} >Presióname</button>
    <style jsx>{`
      button {
        color: white;
        cursor: pointer;
        background-color: #424242;
        padding: 3px 6px;
      }
    `}</style>
  </>

}

