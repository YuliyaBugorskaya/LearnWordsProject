import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import multirouter from '../routes/multrouter';

//   // const sendFile = React.useCallback(async () => {
//   //   try {
// //       const data = new FormData();
//   //     data.append('avatar', img);

//   //     // обращаем к роуту который обрабатывает этот запрос и адресу ручки, data
//   //     await axios.post({
//   //       headers: multirouter,
//   //     })
// //         .then((res) => setAvatar(res.data.path));
//   //   } catch (error) { console.log('ищи ошибку ТУТ!!!!!'); }
//   // });

//   return (
//     <div className="App">
//       <div className="avatar">
//         {
// avatar
//   ? <img className="logo" src={`${avatar}`} alt="avatar" />
//   : <img className="logo" src={`${logo}`} alt="avatar" />
// }
//       </div>
//       <input type="file" onChange={(e) => setImg(e.target.files[0])} />
//       <button className="btn" onClick={sendFile}>изменить аватар</button>
//     </div>
//   );
// }
// спросить у Алены
export default function Table({ currUser }) {
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [count, setCount] = useState([]);
  useEffect(() => {
    fetch(`/lk/kab/prog/${currUser.id}`)
      .then((data) => data.json())
      .then((res) => setCount(res));
  }, []);
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
      <li className="nav-item">
        <a className="nav-link" href="/newForm">Добавление новой карточки</a>
      </li>
      {
      count?.map((el) => (
        <>
          <div>{el.Theme.tittle}</div>
          <div>{el.count}</div>
        </>
      ))
    }
    </div>
  );
}
