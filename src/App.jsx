import { useState } from 'react'
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const startgo = () => {
    setShowModal(true)
    
    // 模拟进度条动画
    const progressBars = document.querySelectorAll('.progress-fill')
    progressBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.style.width = '55%'
      }, (index + 1) * 1000)
    })

    // 3秒后显示弹窗
    setTimeout(() => {
      setShowModal(false)
      setShowPopup(true)
    }, 4000)
  }

  const startoff = () => {
    // 这里可以添加跳转到LINE的逻辑
    window.open('https://line.me/R/ti/p/@example', '_blank')
  }

  return (
    <div className="page flex-col">
      <div className="group_1 flex-col">
        <img className="image_4" referrerPolicy="no-referrer"
          src="/img/pst6nyhfo2m9ha2u1anuhiicsxp5dv693ncbb6833a-7104-4073-b851-ccd35c3e56fe.png" />
        <img className="image_5" referrerPolicy="no-referrer"
          src="/img/psykbxu9igjtq5zhlotvkjvegzw3n49dmjddb35046-3713-4cda-a45e-00968cc28678.png" />
        <span className="text_3">
          <span className="stockName">ソフトバンクグル一プ(9984)</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span className="stocktime"> 2025/09/08 18:16</span>
        </span>
        <div className="container">
          <div className="left">
            <span className="stock_end">15865</span><br/><span className="stock_up">+250 (+0.5)</span>
          </div>
          <div className="right">
            <table>
              <tbody>
                <tr>
                  <td className="label">始値<span className="value stock_price">3250</span></td>
                  <td className="label">高値<span className="value stock_high">3250</span></td>
                </tr>
                <tr>
                  <td className="label">安値<span className="value stock_low">3250</span></td>
                  <td className="label">終値<span className="value stock_end">3250</span></td>
                </tr>
                <tr>
                  <td className="label">価格変動<span className="value stock_change">3250</span></td>
                  <td className="label">売買高(株)<span className="value stock_vemo">75200</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button className="button_2" onClick={startgo}>
          <img className="image_2" referrerPolicy="no-referrer"
            src="/img/psyui20o57q9a03qarctdortazg41jdv7mu53cab220-1019-4720-ad5c-2e93313d6e66.png" />
        </button>
        <img className="image_3" referrerPolicy="no-referrer"
          src="/img/ps0tcgycgupj7os2ncf70xd9kb29c998jqst8555bf1f-e03f-4016-8874-cf1b6599d149.png" />
        <span className="text_4">過去の診断実績</span>
        <div className="grid_1 flex-row">
          <div className="carousel-container">
            <div className="carousel-content">
              <div className="section_1 flex-row">
                <div className="flex-col justify-between">
                  <span className="text_30">SBG</span>
                  <span className="text_30">9984</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_30">昨日予測結果：</span>
                  <span className="text_30">今日株価変動：</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_31">株価の下落確率が高い</span>
                  <span className="text_31">-1.32%</span>
                </div>
              </div>

              <div className="section_1 flex-row">
                <div className="flex-col justify-between">
                  <span className="text_30">キーエンス</span>
                  <span className="text_30">6861</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_30">昨日予測結果：</span>
                  <span className="text_30">今日株価変動：</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_31">株価の上昇確率が高い</span>
                  <span className="text_31">+0.89%</span>
                </div>
              </div>

              <div className="section_1 flex-row">
                <div className="flex-col justify-between">
                  <span className="text_30">FR</span>
                  <span className="text_30">9983</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_30">昨日予測結果：</span>
                  <span className="text_30">今日株価変動：</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_31">株価の上昇確率が高い</span>
                  <span className="text_31">+1.75%</span>
                </div>
              </div>

              <div className="section_1 flex-row">
                <div className="flex-col justify-between">
                  <span className="text_30">TEL</span>
                  <span className="text_30">8035</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_30">昨日予測結果：</span>
                  <span className="text_30">今日株価変動：</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_32">株価の下落確率が高い</span>
                  <span className="text_32">-0.56%</span>
                </div>
              </div>

              <div className="section_1 flex-row">
                <div className="flex-col justify-between">
                  <span className="text_30">MUFG</span>
                  <span className="text_30">8306</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_30">昨日予測結果：</span>
                  <span className="text_30">今日株価変動：</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_31">株価の上昇確率が高い</span>
                  <span className="text_31">+0.42%</span>
                </div>
              </div>

              <div className="section_1 flex-row">
                <div className="flex-col justify-between">
                  <span className="text_30">トヨタ</span>
                  <span className="text_30">7203</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_30">昨日予測結果：</span>
                  <span className="text_30">今日株価変動：</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_31">株価の上昇確率が高い</span>
                  <span className="text_31">+0.67%</span>
                </div>
              </div>

              <div className="section_1 flex-row">
                <div className="flex-col justify-between">
                  <span className="text_30">ソニー</span>
                  <span className="text_30">6758</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_30">昨日予測結果：</span>
                  <span className="text_30">今日株価変動：</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_32">株価の下落確率が高い</span>
                  <span className="text_32">-0.45%</span>
                </div>
              </div>

              <div className="section_1 flex-row">
                <div className="flex-col justify-between">
                  <span className="text_30">任天堂</span>
                  <span className="text_30">7974</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_30">昨日予測結果：</span>
                  <span className="text_30">今日株価変動：</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_31">株価の上昇確率が高い</span>
                  <span className="text_31">+1.12%</span>
                </div>
              </div>

              <div className="section_1 flex-row">
                <div className="flex-col justify-between">
                  <span className="text_30">ホンダ</span>
                  <span className="text_30">7267</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_30">昨日予測結果：</span>
                  <span className="text_30">今日株価変動：</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_32">株価の下落確率が高い</span>
                  <span className="text_32">-0.78%</span>
                </div>
              </div>

              <div className="section_1 flex-row">
                <div className="flex-col justify-between">
                  <span className="text_30">日立</span>
                  <span className="text_30">6501</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_30">昨日予測結果：</span>
                  <span className="text_30">今日株価変動：</span>
                </div>
                <div className="flex-col justify-between">
                  <span className="text_31">株価の上昇確率が高い</span>
                  <span className="text_31">+0.54%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="button_1 flex-col" onClick={startgo}>
          <img className="image_12" referrerPolicy="no-referrer"
          src="/img/psyui20o57q9a03qarctdortazg41jdv7mu53cab220-1019-4720-ad5c-2e93313d6e66.png" />
        </button>
        <div className="text-wrapper_7">
          <span className="paragraph_1">
            Copyright&#64;株価&nbsp;AI&nbsp;予測&nbsp;2025&nbsp;〒105-0011&nbsp;東京都港区芝公園&nbsp;4-2-8
            <br />
            電話：03-6868-4321&nbsp;メール：support&#64;kabupredict.jp
            <br />
            <br />
          </span>
          <span className="paragraph_2">
            <a href="./disclaimer.html">免責事項</a> | <a href="./privacy-policy.html">プライバシーポリシー</a>
          </span>
        </div>
        <div className="group_3 flex-col">
          <span className="paragraph_3">
          </span>
        </div>
        <img className="image_6" referrerPolicy="no-referrer"
          src="/img/ps749zcr7kwjq1gzcqk4yz3xw10i7y65mofe42e11d-b215-46b2-8488-1b456cdcde71.png" />
        <img className="image_7" referrerPolicy="no-referrer"
          src="/img/ps7qjobiou0atl5lpbj1gdxshsr36ijjiun817d2090-7d44-4f84-bbd1-9fda95bf96c7.png" />
        <img className="image_8" referrerPolicy="no-referrer"
          src="/img/pska5gz7w8gebrwl49iz6bm9gtt0cls42a6777ba9c6-1234-4d59-8d29-e225e8153fca.png" />
      </div>

      {/* Loading Modal */}
      {showModal && (
        <div className="modal active">
          <div id="t2" className="modal-content">
            <h1 className="modal-title">銘柄無料診断</h1>
            <h2 className="modal-subtitle">データベースから分析レポートを 取得中です…</h2>
            <div className="modal-divider"></div>
            <div className="progress-bars">
              <div className="progress-bar">
                <div className="progress-bg"></div>
                <div className="progress-fill" data-target="100"></div>
              </div>
              <div className="progress-bar">
                <div className="progress-bg"></div>
                <div className="progress-fill" data-target="100"></div>
              </div>
              <div className="progress-bar">
                <div className="progress-bg"></div>
                <div className="progress-fill" data-target="100"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup Modal */}
      {showPopup && (
        <div className="modal active">
          <div className="modal-popup">
            <h1 className="modal-title">株価分析レポートが生成され まし た。</h1>
            <h2 className="modal-subtitle">ご連絡いただき、早めにお受け取りください</h2>
            <div className="modal-divider"></div>
            <img className="analysis-image" referrerPolicy="no-referrer" src="/img/analysis.png" alt="分析結果" />
            <h2 className="modal-subtitle">ボタンをタップすると LINE 友だち追加画面に進みます。分析銘柄コード 『<span className="stockcode red">8267</span>』を送信していただくと、詳細な予測レポート</h2>
            <button className="popup-button" onClick={startoff}></button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App