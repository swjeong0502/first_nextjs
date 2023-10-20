import Image from 'next/image'

export default function Home(){
    let product = ['토마토', '파스타', '코코넛'];
    let a = [10,20,30,40];
    let b = a.map((value, index)=>{
       return 10
    })
    console.log({b})

    return (
      <div>
        <h4 className="title">상품목록</h4>
            {
                product.map((v,i)=>{
                    console.log({v,i})
                    return (
                        <div className="food" key={i}>
                            <img src={`/${i+1}.jpg`} className="food-img"></img>
                            <h4>{product[i]}</h4>
                        </div>
                    )
                })
            }
      </div>
    )
  }
  
  