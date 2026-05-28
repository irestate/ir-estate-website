import Image from "next/image";
import Link from "next/link";
import styles from "../contact/page.module.css";

export const metadata = {
  title: "プライバシーポリシー | IR estate",
  description: "株式会社 IR estateのプライバシーポリシーです。",
};

export default function PrivacyPage() {
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
          <p className={styles.eyebrow}>Privacy Policy</p>
          <h1>プライバシーポリシー</h1>
          <p>
            株式会社 IR estateは、お問い合わせにより取得した個人情報を適切に管理し、
            お問い合わせ対応および必要なご連絡の目的で利用します。
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.form}>
          <label>
            <span>利用目的</span>
            <p>
              取得した情報は、お問い合わせへの回答、案件内容の確認、必要なご連絡、
              当社サービスの提供および改善のために利用します。
            </p>
          </label>
          <label>
            <span>第三者提供</span>
            <p>
              法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供しません。
              案件対応上必要な関係先への共有が発生する場合は、事前に確認します。
            </p>
          </label>
          <label>
            <span>管理</span>
            <p>
              取得した情報は、漏えい、滅失、改ざん等を防ぐため、必要かつ適切な管理を行います。
            </p>
          </label>
          <label>
            <span>お問い合わせ先</span>
            <p>
              株式会社 IR estate
              <br />
              Email: irestate@ir-estate.jp
            </p>
          </label>
        </div>
      </section>
    </main>
  );
}
