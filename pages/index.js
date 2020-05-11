// トップページ
import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../public/css/utils.module.css'
import React from 'react'

//App.js
class Divider extends React.Component{
  constructor(props){
    super(props);
    this.state = {input:'red'};
  }
  render(){
      let colorFlag = true;
      const text = "hello";
      return (
        <div className="container">
          <Head>
            <title>Index.js</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="/css/header.css" />
          </Head>
          <header>
            <div className="header__logo">
            <Link href="#">
              <a>
                <h1 >Engineer</h1>  
              </a>
            </Link>
            </div>
            <nav className="header__menu">
              <ul className="header__menu__flexbox">
                <li>
                  <Link href="#">
                    <a>
                      <img src='/images/nav-list.png' alt="list"/>
                      <span>一覧へ</span>
                    </a>
                  </Link>                
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <img src='/images/nav-question.png' alt="question"/>
                      <span>よくある質問</span>
                    </a>
                  </Link>
                                  
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <img src='/images/nav-slide.png' alt="slide"/>
                      <span>スライド字幕</span>
                    </a>
                  </Link>
                                  
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <img src='/images/nav-movie.png' alt="movie"/>
                      <span>動画字幕</span>
                    </a>
                  </Link>
                                  
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <img src='/images/nav-copy.png' alt="copy"/>
                      <span>写経</span>
                    </a>
                  </Link>
                                  
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <img src='/images/nav-practice.png' alt="practice"/>
                      <span>練習問題</span>
                    </a>
                  </Link>
                                  
                </li>
              </ul>
            </nav>
            <div className="header__login">
              <Link href="#">
                    <a>
                      <p>ログイン<span>▼</span></p>
                    </a>
              </Link>
            </div>
          </header>
    
          <main>
            <h1 className="title">
              React　×　Next.js<br/><Link href="/posts/signup"><a>Let's signup!</a></Link>
            </h1>
            {/* <form onSubmit={this.submitHandler}> */}
            <form>
              <input
                type="text"
                value={this.state.input}
                // onChange={this.handleChange}
              />
            </form>
    
            <Link href="/posts/signup"><button className={utilStyles.btn}>aaa</button></Link>
    
            
          </main>
    
          <style jsx>{`      
          `}</style>
        </div>
      )
  }
}

export default Divider

// export default function Home() {
//   return (
//     <div className="container">
//       <Head>
//         <title>Index.js</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1 className="title">
//           Cognito　×　React　×　Next.js<br/><Link href="/posts/signup"><a>Let's signup!</a></Link>
//         </h1>
//         {/* <form onSubmit={this.submitHandler}> */}
//         <form>
//           <input
//             type="text"
//             // value={this.state.helloTo}
//             value="3"
//             // onChange={this.handleChange}
//           />
//         </form>

//         <Link href="/posts/signup"><button className={utilStyles.btn}>aaa</button></Link>

        
//       </main>

//       <footer>
//         {/* <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
//         </a> */}
//       </footer>

//       <style jsx>{`      
//       `}</style>
//     </div>
//   )
// }
