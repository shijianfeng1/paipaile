import { useState, useCallback } from 'react'
import bangong from './assets/bangong.jpg'
import caizhuang from './assets/caizhuang.jpg'
import canju from './assets/canju.jpg'
import chaowan from './assets/chaowan.jpg'
import chaungpin from './assets/chaungpin.jpg'
import chaxiang from './assets/chaxiang.jpg'
import chongwu from './assets/chongwu.jpg'
import chudian from './assets/chudian.jpg'
import chuju from './assets/chuju.jpg'
import chuxing from './assets/chuxing.jpg'
import dengju from './assets/dengju.jpg'
import fushi from './assets/fushi.jpg'
import hufu from './assets/hufu.jpg'
import huwai from './assets/huwai.jpg'
import jiadian from './assets/jiadian.jpg'
import jiaju from './assets/jiaju.jpg'
import jiaju1 from './assets/jiaju1.jpg'
import jiancai from './assets/jiancai.jpg'
import jiankang from './assets/jiankang.jpg'
import jieqing from './assets/jieqing.jpg'
import meifa from './assets/meifa.jpg'
import meijiu from './assets/meijiu.jpg'
import muyin from './assets/muyin.jpg'
import nongju from './assets/nongju.jpg'
import peishi from './assets/peishi.jpg'
import shengxian from './assets/shengxian.jpg'
import shipin from './assets/shipin.jpg'
import shuji from './assets/shuji.jpg'
import shuma from './assets/shuma.jpg'
import tongzhuang from './assets/tongzhuang.jpg'
import wenwan from './assets/wenwan.jpg'
import wujin from './assets/wujin.jpg'
import xiangbao from './assets/xiangbao.jpg'
import xielv from './assets/xielv.jpg'
import xihu from './assets/xihu.jpg'
import yaopin from './assets/yaopin.jpg'
import yinliao from './assets/yinliao.jpg'
import yueqi from './assets/yueqi.jpg'
import yundong from './assets/yundong.jpg'
import zhiwu from './assets/zhiwu.jpg'
import './App.css'
import { Button, Card, Flex } from 'antd';

const { Meta } = Card;

const cardTypeArr = [
  { name: '彩妆卡', url: bangong },
  { name: '药品卡', url: yaopin },
  { name: '运动卡', url: yundong },
  { name: '农具卡', url: nongju },
  { name: '书籍卡', url: shuji },
  { name: '办公卡', url: bangong },
  { name: '护肤卡', url: hufu },
  { name: '文玩卡', url: wenwan },
  { name: '家居卡', url: jiaju },
  { name: '食品卡', url: shipin },
  { name: '潮玩卡', url: chaowan },
  { name: '饮料卡', url: yinliao },
  { name: '母婴卡', url: muyin },
  { name: '箱包卡', url: xiangbao },
  { name: '宠物卡', url: chongwu },
  { name: '五金卡', url: wujin },
  { name: '户外卡', url: huwai },
  { name: '植物卡', url: zhiwu },
  { name: '数码卡', url: shuma },
  { name: '厨具卡', url: chuju },
  { name: '床品卡', url: chaungpin },
  { name: '出行卡', url: chuxing },
  { name: '灯具卡', url: dengju },
  { name: '鞋履卡', url: xielv },
  { name: '洗护卡', url: xihu },
  { name: '节庆卡', url: jieqing },
  { name: '茶香卡', url: chaxiang },
  { name: '美发卡', url: meifa },
  { name: '餐具卡', url: canju },
  { name: '配饰卡', url: peishi },
  { name: '服饰卡', url: fushi },
  { name: '乐器卡', url: yueqi },
  { name: '家电卡', url: jiadian },
  { name: '美酒卡', url: meijiu },
  { name: '建材卡', url: jiancai },
  { name: '健康卡', url: jiankang },
  { name: '家具卡', url: jiaju1 },
  { name: '生鲜卡', url: shengxian },
  { name: '童装卡', url: tongzhuang },
  { name: '厨电卡', url: chudian },
]

function App() {
  const [numArr, setNumArr] = useState([])

  const getNumber = function() {
    setNumArr([]);
    const tempArr = [];
    for (let i = 0; i < 5; i ++) {
      const num = Math.floor(Math.random() * 40);
      if (tempArr.includes(num)) {
        i--;
      } else {
        tempArr.push(num);
      }
    }
    setNumArr(tempArr);
  }

  const getCard = useCallback(() => {
    if(numArr?.length === 0) return null;
    const card = numArr.map(item => {
      console.log(cardTypeArr[Number(item)].name)
      return (
      <Card
        key={cardTypeArr[Number(item)].name}
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={cardTypeArr[Number(item)].url} width='240' height='320' />}
      >
        <Meta title={cardTypeArr[Number(item)].name}/>
      </Card>
    )});
    return card;
  }, [numArr])

  return (
    <>
      <Button color="primary" variant="filled" size="large" onClick={() => getNumber()}>{numArr.length == 0 ? '拍拍乐！' : '再拍一次！'}</Button>
      {numArr.length == 0 ? null : <Flex justify='space-around' style={{marginTop: '20px'}}>{getCard()}</Flex>}
    </>
  )
}

export default App
