import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const achievements = [
  {
    area: "東京都大田区大森北一丁目",
    type: "事業用地",
    issue: "法人所有地の活用方針整理",
    response: "用途・収益性を踏まえ、テナントビル用地として条件調整",
  },
  {
    area: "東京都江戸川区南小岩七丁目",
    type: "事業用地",
    issue: "測量・建物現況・契約条件の整理",
    response: "契約不適合免責を前提に、建売用地として取引",
  },
  {
    area: "東京都葛飾区亀有四丁目",
    type: "アパマン用地",
    issue: "賃貸マンション用地としての事業性検討",
    response: "周辺需要と出口を確認し、アパマン用地として取引",
  },
  {
    area: "東京都大田区山王一丁目",
    type: "区分マンション",
    issue: "残置物あり・現況渡しの区分マンション",
    response: "再販計画を前提に、フルリノベーション物件として取引",
  },
  {
    area: "千葉県船橋市浜町一丁目",
    type: "収益物件",
    issue: "賃借人付き・立退き要素を含む収益物件",
    response: "権利関係と引渡条件を整理し、現況渡しで取引",
  },
];

const propertyTypes = [
  {
    title: "アパマン用地\n事業用地",
    image: "property-apartment-land.png",
  },
  {
    title: "収益物件\nレジ・ビル等",
    image: "property-income.png",
  },
  {
    title: "区分マンション",
    image: "property-condo.png",
  },
  {
    title: "立退き案件",
    image: "property-eviction.png",
  },
  {
    title: "残置物あり物件",
    image: "property-leftovers.png",
  },
  {
    title: "再建築不可",
    image: "property-rebuild-disabled.png",
  },
];

const strengths = [
  "一般流通に乗せづらい案件を整理",
  "法人間取引を前提にスピーディに検討",
  "秘密厳守で初期相談から対応",
];

const trustItems = [
  { label: "宅建免許", value: "千葉県知事（1）第18184号" },
  { label: "対応エリア", value: "東京・神奈川・埼玉・千葉を中心に対応" },
  { label: "主な相談元", value: "不動産会社・金融機関・士業関係者" },
  { label: "相談姿勢", value: "秘密厳守・初期相談歓迎" },
];

const reasonCards = [
  {
    title: "リスク要因を実務目線で整理",
    text: "残置物、立退き、再建築不可、契約不適合免責など、取引前に論点になりやすい条件を初期段階で整理します。",
  },
  {
    title: "出口を見据えた買取・活用判断",
    text: "価格だけでなく、用途、収益性、再販可能性、周辺需要を踏まえ、案件ごとの現実的な進め方を検討します。",
  },
  {
    title: "法人間取引に適した進行",
    text: "不動産会社・金融機関との連携を前提に、情報開示、条件調整、スケジュール管理まで丁寧に進めます。",
  },
];

const processSteps = [
  {
    title: "フォームからご相談",
    text: "物件概要、所在地、現在の状況など、分かる範囲でお送りください。",
  },
  {
    title: "内容確認・初回ヒアリング",
    text: "守秘を前提に、権利関係、引渡条件、希望スケジュールを確認します。",
  },
  {
    title: "机上検討・条件整理",
    text: "用途、収益性、再販可能性、リスク要因を踏まえて検討します。",
  },
  {
    title: "方針提案・条件調整",
    text: "買取、活用、関係先連携など、案件に合う進め方をご提案します。",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.logo} href="#top" aria-label="IR estate トップ">
          <Image
            className={styles.logoImage}
            src="/ir-estate-logo-horizontal.png"
            alt="IR estate"
            width={1889}
            height={833}
            priority
          />
        </a>
        <nav className={styles.nav} aria-label="主要ナビゲーション">
          <a href="#top">トップ</a>
          <a href="#service">事業内容</a>
          <a href="#process">ご相談の流れ</a>
          <a href="#results">取引事例</a>
          <a href="#properties">取り扱い対象物件</a>
          <a href="#company">会社情報</a>
        </nav>
        <Link className={styles.headerCta} href="/contact/">
          案件を相談する
          <span aria-hidden="true">›</span>
        </Link>
      </header>

      <section id="top" className={styles.hero}>
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="hero-video.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroInner}>
          <p className={styles.heroTag}>不動産会社・金融機関向け</p>
          <h1>複雑な不動産案件の買取・整理・出口戦略を支援</h1>
          <p className={styles.heroLead}>
            再建築不可、残置物、立退き、収益物件、事業用地など、
            一般流通では扱いづらい案件を実務目線で整理します。
            守秘を前提に、初期段階のご相談から対応します。
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryCta} href="/contact/">
              物件情報を送る
              <span aria-hidden="true">›</span>
            </Link>
            <a className={styles.secondaryCta} href="#results">
              取引事例を見る
            </a>
          </div>
          <div className={styles.heroProofs} aria-label="IR estate の強み">
            {strengths.map((strength, index) => (
              <div className={styles.proofItem} key={strength}>
                <span>{index + 1}</span>
                <p>{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.trustStrip} aria-label="信頼情報">
        <div>
          {trustItems.map((item) => (
            <dl key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </dl>
          ))}
        </div>
      </section>

      <section id="process" className={styles.reasonSection}>
        <div className={styles.reasonInner}>
          <div className={styles.sectionLead}>
            <p className={styles.eyebrow}>Why IR estate</p>
            <h2>相談前の不確実性を、取引できる論点に整理します。</h2>
            <p>
              条件が複雑な案件ほど、早い段階で論点を分解することが重要です。
              IR estateは、法人間取引の現場感をもとに、案件の進め方を具体化します。
            </p>
          </div>

          <div className={styles.reasonGrid}>
            {reasonCards.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.processBlock}>
            <div className={styles.sectionHeader}>
              <h2>ご相談の流れ</h2>
            </div>
            <div className={styles.processGrid}>
              {processSteps.map((step, index) => (
                <article key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.overview} aria-label="主要情報">
        <div className={styles.overviewGrid}>
          <section id="results" className={styles.results}>
            <div className={styles.sectionHeader}>
              <h2>取引事例</h2>
            </div>
            <div className={styles.resultList}>
              {achievements.map((item) => (
                <article className={styles.resultCard} key={`${item.area}-${item.type}`}>
                  <dl>
                    <div>
                      <dt>エリア</dt>
                      <dd>{item.area}</dd>
                    </div>
                    <div>
                      <dt>種別</dt>
                      <dd>{item.type}</dd>
                    </div>
                    <div>
                      <dt>課題</dt>
                      <dd>{item.issue}</dd>
                    </div>
                    <div>
                      <dt>対応</dt>
                      <dd>{item.response}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>

          <section id="properties" className={styles.properties}>
            <div className={styles.sectionHeader}>
              <h2>取り扱い対象物件</h2>
            </div>
            <div className={styles.propertyGrid}>
              {propertyTypes.map((item) => (
                <article className={styles.propertyCard} key={item.title}>
                  <div
                    className={styles.propertyImage}
                    style={{ backgroundImage: `url(${item.image})` }}
                    aria-hidden="true"
                  />
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          </section>

          <aside id="company" className={styles.companyArea}>
            <div className={styles.sectionHeader}>
              <h2>会社情報・対応エリア</h2>
            </div>
            <div className={styles.company}>
              <div className={styles.companyBlock}>
                <h3>会社名</h3>
                <p>株式会社 IR estate</p>
              </div>
              <div className={styles.companyBlock}>
                <h3>所在地</h3>
                <p>千葉県船橋市本町7-23-10-406</p>
              </div>
              <div className={styles.companyBlock}>
                <h3>連絡先</h3>
                <p>
                  代表電話: 047-767-0365
                  <br />
                  Email: irestate@ir-estate.jp
                </p>
              </div>
              <div className={styles.companyBlock}>
                <h3>免許番号</h3>
                <p>千葉県知事（1）第18184号</p>
              </div>
              <div className={styles.companyBlock}>
                <h3>対応エリア</h3>
                <p>
                  首都圏（東京都・神奈川県・埼玉県・千葉県）
                  <br />
                  その他エリアもご相談ください。
                </p>
              </div>
              <Link id="contact" className={styles.companyCta} href="/contact/">
                案件を相談する
                <span aria-hidden="true">›</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section id="service" className={styles.strengthSection}>
        <div className={styles.strengthInner}>
          <article className={styles.serviceContent}>
            <p className={styles.eyebrow}>Service</p>
            <h2>事業内容</h2>
            <div className={styles.serviceCard}>
              <h3>不動産買取事業</h3>
              <p>
                区分マンション、戸建て、土地、事業用不動産、借地権、
                再建築不可など、種別や規模を問わず検討します。
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>コンサルティング事業</h3>
              <p>
                売買、賃貸、建築、税務など周辺論点も含め、
                案件ごとに必要な整理と関係先連携を支援します。
              </p>
            </div>
          </article>

          <div className={styles.strengthContent}>
            <div>
              <p className={styles.eyebrow}>Strength</p>
              <h2>IR estateの強み</h2>
            </div>
            <div className={styles.strengthCards}>
              <article>
                <span>01</span>
                <div>
                  <h3>幅広い物件種別に対応</h3>
                  <p>
                    一般的な不動産から、権利関係や利用条件に課題がある案件まで、
                    相談初期から実務目線で整理します。
                  </p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>法人間取引に適した進行</h3>
                  <p>
                    不動産会社・金融機関との連携を前提に、情報開示、条件調整、
                    スケジュール管理まで丁寧に進めます。
                  </p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>出口を見据えた判断</h3>
                  <p>
                    価格だけでなく、用途、収益性、再販可能性、リスク要因を踏まえ、
                    案件ごとに現実的な道筋を検討します。
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className={styles.news}>
        <div className={styles.newsInner}>
          <h2>ニュース</h2>
          <div className={styles.newsList}>
            <article>
              <time dateTime="2026-05-12">2026.5.12</time>
              <p>会社ホームページをリニューアルしました。</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
