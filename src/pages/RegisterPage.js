import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

import { Button } from 'react-bootstrap';
import s from './RegisterPage.module.css';
import Container from '../components/Container';

const {register} = authOperations;

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const updateName = e => {
    setName(e.target.value);
  };

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = useCallback((e) => {
      e.preventDefault();

      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    },[dispatch, name, email, password]
  );


  return (
    <Container title="Registration page">
      <form
          autoComplete="off"
          onSubmit={handleSubmit}
      >
        <label
          className={s.label}
          autoComplete="off"
        >Name
            <input
              className={s.input} 
              type="text"
              name="name"
              onChange={updateName}
              value={name}
            >
            </input>
        </label>

        <label
          className={s.label}
        >Email
            <input
              className={s.input} 
              type="email"
              name="email"
              onChange={updateEmail}
              value={email}
            >
            </input>
        </label>

        <label
          className={s.label}
          autoComplete="off"
        >Pass
            <input
              className={s.input} 
              type="password"
              name="password"
              value={password}
              onChange={updatePassword}
            >
            </input>
        </label>
        <Button type="submit">Registration</Button>
      </form>
    </Container>
  )
}


// class RegisterPage extends Component {
//     state = {
//         name: '',
//         email: '',
//         password: '',
//       };

//   handleChange = ({target: {name, value}}) => {
//     setState({[name]: value})

//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     props.onRegister(state);

//     setState({name: '', email: '', password: ''})
//   };

//     render () {
//       const {name, email, password} =state;

//         return (
//             <Container title="Registration page">
//               <form
//                   autoComplete="off"
//                   onSubmit={handleSubmit}
//               >
//                 <label
//                   className={s.label}
//                   autoComplete="off"
//                 >Name
//                     <input
//                       className={s.input} 
//                       type="text"
//                       name="name"
//                       onChange={handleChange}
//                       value={name}
//                     >
//                     </input>
//                 </label>
  
//                 <label
//                   className={s.label}
//                 >Email
//                     <input
//                       className={s.input} 
//                       type="email"
//                       name="email"
//                       onChange={handleChange}
//                       value={email}
//                     >
//                     </input>
//                 </label>
  
//                 <label
//                   className={s.label}
//                   autoComplete="off"
//                 >Passs
//                     <input
//                       className={s.input} 
//                       type="password"
//                       name="password"
//                       value={password}
//                       onChange={handleChange}
//                     >
//                     </input>
//                 </label>
//                 <Button type="submit">Registration me</Button>
//               </form>
//             </Container>
//           );
//     }
// }

// const mapDispatchToProps = dispatch => ({
//   onRegister: (data) => dispatch(register(data))
// })


// export default connect(null, mapDispatchToProps)(RegisterPage);