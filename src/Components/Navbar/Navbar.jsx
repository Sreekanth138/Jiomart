import styled from 'styled-components';
import style from './Navbar.module.css';
import {Link } from "react-router-dom"
import { useSelector } from 'react-redux';
export function NavBar({ setSideBarVisible }) {
  let closeBar = () => {
    setSideBarVisible(true);
  };
  const isAuth = useSelector(state => state.Auth.isAuth)

  return (
    <Nav>
      <div
        className={style.threelines}
        onClick={closeBar}
        style={{ cursor: 'pointer' }}
      >
        <img
          style={{ height: '24px' }}
          src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQwOS42IDQwOS42IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0zOTIuNTMzLDE3LjA2N0gxNy4wNjdDNy42NDEsMTcuMDY3LDAsMjQuNzA4LDAsMzQuMTMzUzcuNjQxLDUxLjIsMTcuMDY3LDUxLjJoMzc1LjQ2NyAgICBjOS40MjYsMCwxNy4wNjctNy42NDEsMTcuMDY3LTE3LjA2N1M0MDEuOTU5LDE3LjA2NywzOTIuNTMzLDE3LjA2N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM5Mi41MzMsMTg3LjczM0gxNy4wNjdDNy42NDEsMTg3LjczMywwLDE5NS4zNzQsMCwyMDQuOHM3LjY0MSwxNy4wNjcsMTcuMDY3LDE3LjA2N2gzNzUuNDY3ICAgIGM5LjQyNiwwLDE3LjA2Ny03LjY0MSwxNy4wNjctMTcuMDY3UzQwMS45NTksMTg3LjczMywzOTIuNTMzLDE4Ny43MzN6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0zOTIuNTMzLDM1OC40SDE3LjA2N0M3LjY0MSwzNTguNCwwLDM2Ni4wNDEsMCwzNzUuNDY3czcuNjQxLDE3LjA2NywxNy4wNjcsMTcuMDY3aDM3NS40NjcgICAgYzkuNDI2LDAsMTcuMDY3LTcuNjQxLDE3LjA2Ny0xNy4wNjdTNDAxLjk1OSwzNTguNCwzOTIuNTMzLDM1OC40eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4='
        />
      </div>
      <div>
        <img
          className={style.logoImg}
          src='https://www.jiomart.com/assets/version1620668133/smartweb/images/jiomart_logo_beta.svg'
          alt='logo'
        />
      </div>
      <div>
        <input
          className={style.serach_bar}
          type='text'
          placeholder='    Search essentials, groceries, and more ...'
        />
        <span>
          <img
            className={style.iconInsideSearch}
            src='https://img.icons8.com/material-rounded/64/000000/list.png'
          />
        </span>
      </div>
      
    {isAuth? (<div className={style.signInLink}>
      <img
          style={{ height: '30px' }}
          src='	https://www.jiomart.com/assets/version162335126993/smartweb/images/icons/my-account.svg'
        />
    </div>):( <div className={style.signInLink}>
        <img
          style={{ height: '24px' }}
          src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQyOS40NTMgNDI5LjQ1MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNMjE0LjcyNywyNDEuODk0Yy0xMjkuMDQ1LDAtMjAwLjA5OCw2MS4xMjctMjAwLjA5OCwxNzEuODg2YzAsOC44ODIsNi43OTIsMTUuNjczLDE1LjY3MywxNS42NzMgICBoMzY4Ljg0OWM4Ljg4MiwwLDE1LjY3My02Ljc5MiwxNS42NzMtMTUuNjczQzQxNC44MjQsMzAzLjAyLDM0My43NzEsMjQxLjg5NCwyMTQuNzI3LDI0MS44OTR6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjNGRjZmUwIiBjbGFzcz0iIj48L3BhdGg+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNMjE0LjcyNywyMTguOTA2YzU3LjQ2OSwwLDEwMy45NjctNTAuNjc4LDEwMy45NjctMTEyLjg0OUMzMTguNjk0LDQ1LjQ1MywyNzMuNzYzLDAsMjE0LjcyNywwICAgUzExMC43NTksNDUuNDUzLDExMC43NTksMTA2LjA1N0MxMTAuNzU5LDE2OC4yMjksMTU3LjI1NywyMTguOTA2LDIxNC43MjcsMjE4LjkwNnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiM0ZGNmZTAiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+'
        />
        <div style={{ marginTop: '-22px', marginLeft: '30px' }}>
          {' '}
          <Link style={{color:"white"}} to="/signIn">Sign in / Sign up</Link>
          
        </div>
      </div>)}
     
     
      <div className={style.signInLink}>
        <img
          style={{ height: '24px' }}
          src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1Ni4wMjkgNDU2LjAyOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzQ1LjYsMzM4Ljg2MmMtMjkuMTg0LDAtNTMuMjQ4LDIzLjU1Mi01My4yNDgsNTMuMjQ4YzAsMjkuMTg0LDIzLjU1Miw1My4yNDgsNTMuMjQ4LDUzLjI0OCAgICBjMjkuMTg0LDAsNTMuMjQ4LTIzLjU1Miw1My4yNDgtNTMuMjQ4QzM5OC4zMzYsMzYyLjkyNiwzNzQuNzg0LDMzOC44NjIsMzQ1LjYsMzM4Ljg2MnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQzOS4yOTYsODQuOTFjLTEuMDI0LDAtMi41Ni0wLjUxMi00LjA5Ni0wLjUxMkgxMTIuNjRsLTUuMTItMzQuMzA0QzEwNC40NDgsMjcuNTY2LDg0Ljk5MiwxMC42Nyw2MS45NTIsMTAuNjdIMjAuNDggICAgQzkuMjE2LDEwLjY3LDAsMTkuODg2LDAsMzEuMTVjMCwxMS4yNjQsOS4yMTYsMjAuNDgsMjAuNDgsMjAuNDhoNDEuNDcyYzIuNTYsMCw0LjYwOCwyLjA0OCw1LjEyLDQuNjA4bDMxLjc0NCwyMTYuMDY0ICAgIGM0LjA5NiwyNy4xMzYsMjcuNjQ4LDQ3LjYxNiw1NS4yOTYsNDcuNjE2aDIxMi45OTJjMjYuNjI0LDAsNDkuNjY0LTE4Ljk0NCw1NS4yOTYtNDUuMDU2bDMzLjI4LTE2Ni40ICAgIEM0NTcuNzI4LDk3LjcxLDQ1MC41Niw4Ni45NTgsNDM5LjI5Niw4NC45MXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTIxNS4wNCwzODkuNTVjLTEuMDI0LTI4LjE2LTI0LjU3Ni01MC42ODgtNTIuNzM2LTUwLjY4OGMtMjkuNjk2LDEuNTM2LTUyLjIyNCwyNi4xMTItNTEuMiw1NS4yOTYgICAgYzEuMDI0LDI4LjE2LDI0LjA2NCw1MC42ODgsNTIuMjI0LDUwLjY4OGgxLjAyNEMxOTMuNTM2LDQ0My4zMSwyMTYuNTc2LDQxOC43MzQsMjE1LjA0LDM4OS41NXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+'
        />
        <div style={{ marginTop: '-22px', marginLeft: '30px' }}> Cart</div>
      </div>
    </Nav>
  );
}
// -----------------CSS----------------------
const Nav = styled.div`
  height: 72px;
  background-color: rgb(0, 142, 204);
  display: flex;
  padding-left: 200px;
  gap: 40px;
`;
