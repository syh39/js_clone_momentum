const quotes = [
    {
        quote: 'Loving is knowing how to live, Living is knowing how to love.',
        author: 'Unknown'
    }, 
    {
        quote: 'Loving is knowing how to live, Living is knowing how to love',
        author: 'Unknown'
    },
    {
        quote: '세상에 공짜는 없다',
        author: 'Unknown'
    },
    {
        quote: '너 자신이 돼라. 다른 사람은 이미 있으니까',
        author: '오스카 와일드'
    },
    {
        quote: '승자는 시간을 관리하며 살고 패자는 시간에 끌려 산다',
        author: 'J.하비스'
    },
    {
        quote: '일단 시작해라. 나중에 완벽해지면 된다',
        author: '론 무어'
    },
    {
        quote: '아무것도 하지 않으면 아무 일도 일어나지 않는다',
        author: '기시미 이치로'
    },
    {
        quote: '오늘 할 수 있는 일을 내일로 미루지 마라',
        author: '벤자민 프랭클린'
    },
    {
        quote: '현명한 사람은 타인의 실패에서도 교훈을 얻을 줄 알지만, 어리석은 사람은 자신의 실패에서도 교훈을 얻을 줄 모른다.',
        author: '벤자민 프랭클린'
    },
    {
        quote: '훌륭한 일을 하는 유일한 방법은 당신이 하는 일을 사랑하는 것입니다',
        author: '스티브 잡스'
    },
    {
        quote: '필요한 것을 먼저 시작하라. 그리고 그 다음 가능한 일을 하라. 그렇게 하다 보면 어느 순간 갑자기 불가능하게 느껴졌던 일을 하고 있을 것이다',
        author: '성 프란시스'
    },
    {
        quote: '시작이 반이다',
        author: '아리스토텔레스'
    },
    {
        quote: '무엇이든 할 수 있다고 생각하는 사람이 해내는 법이다',
        author: '정주영'
    }
]

const quote = document.querySelector('#quote p:first-child');
const author = document.querySelector('#quote p:last-child');

const getQuotes = () => {
    const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;
}  

getQuotes();
setInterval(getQuotes, 10000)