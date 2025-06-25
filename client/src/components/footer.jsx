import React from 'react'
import style from './css/footer.module.css'

function Footer() {
  return (
   <footer className={style.footer}>
      <div className={style.footer_column}>
        <h4>start.gg</h4>
        <a href="/">Create Tournament</a>
        <a href="/">Submit Ranking</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms of Service</a>
      </div>

      <div className={style.footer_column}>
        <h4>Discover</h4>
        <a href="/">Tournaments</a>
        <a href="/">Rankings</a>
        <a href="/">Shops</a>
        <a href="/">Fantasy</a>
      </div>

      <div className={style.footer_column}>
        <h4>Social</h4>
        <a href="/">Twitter</a>
        <a href="/">Bluesky</a>
        <a href="/">Discord</a>
        <a href="/">Blog</a>
      </div>

      <div className={style.footer_column}>
        <h4>Help</h4>
        <a href="/">Help Center</a>
        <a href="/">Contact Us</a>
        <a href="/">Schedule a Call</a>
        <a href="/">ggUniversity</a>
      </div>
    </footer>
  )
}

export default Footer