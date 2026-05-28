import Link from "next/link";
import styles from "../page.module.css";

export const metadata = {
  title: "送信完了 | IR estate",
};

export default function ThanksPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Thank you</p>
          <h1>お問い合わせを受け付けました。</h1>
          <p>内容を確認のうえ、担当者よりご連絡いたします。</p>
          <Link className={styles.backLink} href="/">
            トップへ戻る
            <span aria-hidden="true">›</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
