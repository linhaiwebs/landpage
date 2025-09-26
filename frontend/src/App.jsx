import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

// Analytics service
class AnalyticsService {
  constructor() {
    this.baseURL = 'http://localhost:3001/api'
    this.sessionId = this.generateSessionId()
    this.token = null
    this.hasScrolled = false
    this.init()
  }

  generateSessionId() {
    return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now()
  }

  async init() {
    // Set session ID in headers for all requests
    this.setSessionHeaders()
    
    // Check token validity
    await this.checkToken()
    
    // Track page load
    this.trackEvent('page_load', { url: window.location.href })
    
    // Setup scroll tracking
    this.setupScrollTracking()
  }

  setSessionHeaders() {
    // Add session ID to all requests
    const originalFetch = window.fetch
    window.fetch = (url, options = {}) => {
      if (url.startsWith(this.baseURL)) {
        options.headers = {
          ...options.headers,
          'X-Session-ID': this.sessionId,
          'X-Screen-Resolution': `${screen.width}x${screen.height}`,
          'X-Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone
        }
      }
      return originalFetch(url, options)
    }
  }

  async checkToken() {
    try {
      const response = await fetch(`${this.baseURL}/auth/check-token${window.location.search}`)
      const data = await response.json()
      
      if (data.valid) {
        this.token = data.token
        return true
      } else {
        return false
      }
    } catch (error) {
      console.error('Token check failed:', error)
      return false
    }
  }

  async trackEvent(eventType, eventData = {}) {
    try {
      await fetch(`${this.baseURL}/analytics/track`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Session-ID': this.sessionId
        },
        body: JSON.stringify({
          eventType,
          eventData,
          pageUrl: window.location.href
        })
      })
    } catch (error) {
      console.error('Event tracking failed:', error)
    }
  }

  async trackConversion(conversionType = 'button_click', conversionValue = 0) {
    try {
      const response = await fetch(`${this.baseURL}/analytics/conversion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Session-ID': this.sessionId
        },
        body: JSON.stringify({
          conversionType,
          conversionValue
        })
      })
      
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Conversion tracking failed:', error)
      return null
    }
  }

  setupScrollTracking() {
    let scrollTimeout
    window.addEventListener('scroll', () => {
      if (!this.hasScrolled) {
        this.hasScrolled = true
        this.trackEvent('scroll', { scrolled: true })
      }
    })
  }

  hasValidToken() {
    return !!this.token
  }
}

// Initialize analytics
const analytics = new AnalyticsService()

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [showLoadingMask, setShowLoadingMask] = useState(true)

  useEffect(() => {
    // Check if user has valid token
    const checkAccess = async () => {
      const hasAccess = await analytics.checkToken()
      if (hasAccess) {
        setShowLoadingMask(false)
      }
      // If no access, keep loading mask visible
    }
    
    checkAccess()
  }, [])

  const startgo = async () => {
    // Track button click
    analytics.trackEvent('button_click', { button: 'diagnosis_start' })
    
    setShowModal(true)
    
    // 模拟进度条动画
    const progressBar = document.querySelector('.progress-bar')
    if (progressBar) {
      progressBar.style.animation = 'progress 3s ease-in-out forwards'
    }
    
    // 3秒后显示弹窗
    setTimeout(() => {
      setShowModal(false)
      setShowPopup(true)
    }, 4000)
  }

  const startoff = async () => {
    // Track conversion
    const conversionData = await analytics.trackConversion('line_redirect', 1)
    
    if (conversionData && conversionData.redirectUrl) {
      // Use split test URL
      window.open(conversionData.redirectUrl, '_blank')
    } else {
      // Fallback URL
      window.open('https://line.me/R/ti/p/@example', '_blank')
    }
  }

  return (
    <>
      {/* Loading Mask for users without valid token */}
      {showLoadingMask && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="text-center text-white">
            <div className="loading w-12 h-12 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-lg">データを読み込み中...</p>
            <p className="text-sm mt-2 opacity-75">しばらくお待ちください</p>
          </div>
        </div>
      )}
      
    <div className="page flex-col">
      <div className="group_1 flex-col">
        <img className="image_4" referrerPolicy="no-referrer"
             src="https://cdn.builder.io/api/v1/image/assets%2F435b5e6b8b8b4b8b8b8b8b8b8b8b8b8b%2F8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b" />
        <div className="text_1">
          <span className="text_1_span0">あなたの</span>
          <span className="text_1_span1">薄毛危険度</span>
          <span className="text_1_span2">を</span>
          <span className="text_1_span3">診断</span>
        </div>
        <div className="text_2">
          <span className="text_2_span0">簡単な質問に答えるだけで</span>
          <span className="text_2_span1">あなたの薄毛リスクがわかります</span>
        </div>
        <div className="button_1" onClick={startgo}>
          <span className="text_3">診断を開始する</span>
        </div>
      </div>

      {/* 診断中のモーダル */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="diagnosis-container">
              <h2>診断中...</h2>
              <div className="progress-container">
                <div className="progress-bar"></div>
              </div>
              <p>あなたの薄毛危険度を分析しています</p>
            </div>
          </div>
        </div>
      )}

      {/* 結果表示のポップアップ */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="result-container">
              <h2>診断結果</h2>
              <div className="danger-level">
                <span className="level-text">薄毛危険度</span>
                <span className="level-percentage">78%</span>
              </div>
              <p className="result-description">
                あなたの薄毛リスクは高めです。<br />
                専門家のアドバイスを受けることをお勧めします。
              </p>
              <div className="action-button" onClick={startoff}>
                <span>専門家に相談する</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default App