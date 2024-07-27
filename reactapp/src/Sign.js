import logo from '../src/img/logo.svg';
import './reg-style.css';

function Sign() {
  return (
    <section class="registration">
        <div class="reg-window">
            <div class="logo">
              <a href="/"><img src={logo} width="84" height="88" alt="Логотип яхт-клуба Yacht Club"/></a>
            </div>
            <form class="reg-form">
                <span>
                    <input type="text" class="email" placeholder="E-mail"/>
                </span>
                <span>
                    <input type="password" class="password" placeholder="Password"/>
                </span>
            </form>
            <div class="reg-button-container">
                <button class="reg-button">Sign in</button>
            </div>
            <p>Have no account? <a href="/registration">Sign up</a> </p>
        </div>
    </section>
  );
}

export default Sign;