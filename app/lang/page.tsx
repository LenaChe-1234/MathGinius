import Link from "next/link";
import { t } from "@/lib/i18n/translations";
import { TOPIC_CONFIGS } from "@/types/exercises";
import s from "./page.module.css";

const LANG_TOPICS = TOPIC_CONFIGS.filter((topic) => topic.track === "lang");

export default function LangPage() {
  return (
    <div>
      <div className={`section-heading section-block ${s.intro}`}>
        <h1>{t.gymi.langTitle}</h1>
        <div className={s.textBox}>
          <p>{t.track.langDescription}</p>
          <p className={s.topicPrompt}>{t.track.topicsSubtitle}</p>
        </div>
      </div>

      <div className={s.grid}>
        {LANG_TOPICS.map((topic) => (
          <Link key={topic.slug} href={`/lang/${topic.slug}`} className={s.card}>
            <h3 className={s.cardTitle}>{topic.title_de}</h3>
            <p className={s.cardDesc}>{topic.desc_de}</p>
            <span className={s.start}>{t.track.startTopic} →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
