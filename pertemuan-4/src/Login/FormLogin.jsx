import React from 'react';
import './FormLogin.css';

class FormLogin extends React.Component
{
    render() {
        return(
            <div>
                <center><h2>Form Login</h2></center>
                <form>
                    <center><h1>Tugas Pertemuan Ketiga</h1></center>

                  <div className="container">
                  <center>
                    <table>
                        <tr>
                            <td><b>Username</b></td>
                            <input type="text" placeholder="Masukkan Username" name="uname" required/>
                        </tr>
                        <tr>
                            <td><b>Password</b></td>
                            <input type="password" placeholder="Masukkan Password Anda" name="psw" required/>
                        </tr>
                    </table>
                    </center>
                    <button type="submit">Login</button>
                    <center><input type="checkbox" defaultChecked/> Remember me</center>
                  </div>
                  <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                    <center><button type="button" className="cancelbtn">Cancel</button></center>
                  </div>
                </form>
            </div>
        );
    }
    
}

export default FormLogin;