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
          </Head>
    
          <main>
            <h1 className="title">
              Cognito　×　React　×　Next.js<br/><Link href="/posts/signup"><a>Let's signup!</a></Link>
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
