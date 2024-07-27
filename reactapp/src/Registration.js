import logo from '../src/img/logo.svg';
import './reg-style.css';
import 'bootstrap';
function Registration() {
    return (
        <section class="registration">
        <div class="reg-window">
            <div class="logo">
                <a href="/"><img src={logo} width="84" height="88" alt="Логотип яхт-клуба Yacht Club"/></a>
            </div>
            <form class="reg-form">
                <span>
                    <input type="text" class="user-name" placeholder="Username"/>
                </span>
                <span>
                    <input type="password" class="password" placeholder="Password"/>
                </span>
                <span>
                    <input type="password" class="confirm-password" placeholder="Confirm password"/>
                </span>
                <span>
                    <input type="text" class="email" placeholder="E-mail"/>
                </span>
            </form>
            <div class="reg-button-container">
                <button class="reg-button">Sign up</button>
            </div>
            <p>Have an account? <a href="/sign">Sign In</a> </p>
        </div>
    </section>
    );
  }
  
  export default Registration;