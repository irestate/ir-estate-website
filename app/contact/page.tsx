import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "お問い合わせ | IR estate",
  description: "IR estateへの法人間取引・不動産案件のご相談はこちらからお問い合わせください。",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/" aria-label="IR estate トップ">
          <Image
            className={styles.logoImage}
            src="/ir-estate-logo-horizontal.png"
            alt="IR estate"
            width={1889}
            height={833}
            priority
          />
        </Link>
        <Link className={styles.backLink} href="/">
          トップへ戻る
          <span aria-hidden="true">›</span>
        </Link>
      </header>

      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Contact</p>
          <h1>法人間取引のご相談</h1>
          <p>
            物件概要、所在地、ご相談内容など、分かる範囲でご入力ください。
            守秘を前提に内容を確認し、担当者よりご連絡いたします。
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <form
          className={styles.form}
          action="https://formsubmit.co/irestate@ir-estate.jp"
          method="POST"
        >
          <input type="hidden" name="_subject" value="IR estate 法人間取引のご相談" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://ir-estate.jp/contact/thanks/" />
          <input type="text" name="_honey" className={styles.honey} tabIndex={-1} autoComplete="off" />

          <div className={styles.fieldGrid}>
            <label>
              <span>会社名</span>
              <input name="会社名" type="text" autoComplete="organization" />
            </label>

            <label>
              <span>お名前</span>
              <input name="お名前" type="text" autoComplete="name" required />
            </label>

            <label>
              <span>メールアドレス</span>
              <input name="メールアドレス" type="email" autoComplete="email" required />
            </label>

            <label>
              <span>電話番号</span>
              <input name="電話番号" type="tel" autoComplete="tel" />
            </label>
          </div>

          <label>
            <span>ご相談種別</span>
            <select name="ご相談種別" defaultValue="法人間取引のご相談" required>
              <option value="法人間取引のご相談">法人間取引のご相談</option>
              <option value="不動産買取のご相談">不動産買取のご相談</option>
              <option value="物件査定のご相談">物件査定のご相談</option>
              <option value="その他">その他</option>
            </select>
          </label>

          <label>
            <span>物件所在地・概要</span>
            <input name="物件所在地・概要" type="text" placeholder="例: 東京都内の事業用地、収益物件など" />
          </label>

          <label>
            <span>ご相談内容</span>
            <textarea name="ご相談内容" rows={8} required />
          </label>

          <p className={styles.policyText}>
            送信内容はお問い合わせ対応の目的で利用します。詳しくは
            <Link href="/privacy/">プライバシーポリシー</Link>
            をご確認ください。
          </p>

          <label className={styles.consent}>
            <input name="個人情報の取り扱いへの同意" type="checkbox" value="同意する" required />
            <span>個人情報の取り扱いに同意します</span>
          </label>

          <button className={styles.submitButton} type="submit">
            送信する
            <span aria-hidden="true">›</span>
          </button>
        </form>
      </section>
    </main>
  );
}
