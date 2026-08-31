import React from "react"
import Link from "next/link"
import type { Metadata } from "next"
import styles from "./AboutMe.module.css";
import Carousel from "@/components/Carousel"
import { getMediumArticles } from "@/hooks/mediumHooks"

export const metadata: Metadata = {
  title: "About — Ann-Marie Kemp",
  description: "Mobile Engineering Lead specializing in React Native, mobile architecture, and accessibility — background, career history, and education.",
}

const kittyPhotos = [
  "/images/kitty/IMG_0717.jpg",
  "/images/kitty/IMG_1303.jpg",
  "/images/kitty/IMG_1311.jpg",
  "/images/kitty/IMG_1312.jpg",
  "/images/kitty/IMG_1364.jpg",
  "/images/kitty/IMG_2150.jpg",
  "/images/kitty/IMG_3373.jpg",
  "/images/kitty/IMG_5787.jpg",
  "/images/kitty/IMG_6191.jpg",
  "/images/kitty/image000000.jpg",
]

const AboutMe = async () => {
  const articles = await getMediumArticles();

  return (
      <div className="main-page-container">
        <h1 className="page-header">Hi, I&apos;m Ann-Marie 👋</h1>
        <div className="description-text">
          <p>
            I&apos;m a <strong>Lead Application Development Engineer at Centene</strong> specializing in mobile application development with <strong>React Native, TypeScript, and JavaScript</strong>. I work on large-scale healthcare applications, with a focus on mobile architecture, accessibility, application modernization, and building maintainable systems that can evolve across multiple products and teams.
          </p>
          <br />
          <p>
            My work spans the full mobile stack&mdash;from React Native application architecture and state management to native iOS and Android integrations, API design, authentication, analytics, testing, CI/CD, and production troubleshooting. I particularly enjoy digging into difficult problems that cross the boundaries between JavaScript, native mobile platforms, backend services, and third-party SDKs.
          </p>
          <br />
          <p>
            Technical leadership has been a consistent part of my career. I enjoy helping teams work through architectural decisions, troubleshooting complex issues, improving engineering practices, and mentoring other developers.
          </p>
          <br />

          <h2 className="sub-header">Previously</h2>
          <p>
            Before joining Centene, I was a <strong>Software Developer in IBM&apos;s CIO organization</strong>, where I built internal applications designed to improve employee productivity.
          </p>
          <br />
          <p>
            At IBM, I contributed to multiple generations of the company&apos;s internal homepage using <strong>React and Vue.js</strong>, helped build a <strong>GraphQL API layer</strong> that unified data from multiple internal services, and served in technical leadership roles across several projects.
          </p>
          <br />
          <p>
            I also led development of a <strong>React Native companion application for IBM&apos;s internal homepage</strong> and coordinated deployments of the intranet homepage across multiple teams.
          </p>
          <br />

          <h2 className="sub-header">From Sound Engineering to Software Engineering</h2>
          <p>
            My route into software engineering was not a traditional one.
          </p>
          <br />
          <p>
            I hold a degree in <strong>Theatrical Production Design and Technology from the University of Arizona</strong>, with an emphasis in Sound Design. Before becoming a software engineer, I spent more than a decade working in professional theater and broadcast audio.
          </p>
          <br />
          <p>
            I began my career in New York City working as a theatrical sound engineer and technician at venues including <strong>The Public Theater, Second Stage Theater, Playwrights Horizons, and the Delacorte Theater in Central Park</strong>. Career highlights included working on the pre-Broadway production of <em>Fun Home</em> at The Public Theater and the Jason Robert Brown-directed revival of <em>The Last Five Years</em> at Second Stage.
          </p>
          <br />
          <p>
            I later moved into broadcast engineering, working with organizations including <strong>NEP Group, Al Jazeera America, Amazon, Thomson Reuters, i24 News, Fox News, and Fox Business</strong>.
          </p>
          <br />
          <p>
            That background still influences how I approach engineering today: complex systems, live production, troubleshooting under pressure, communication across disciplines, and making sure everything works when it actually matters.{" "}
            <Link className={styles["inline-link"]} href="/AudioEngineering">
              See the full timeline
            </Link>.
          </p>
          <br />

          <h2 className="sub-header">What I&apos;m Working On</h2>
          <p>These days I&apos;m particularly interested in:</p>
          <p>
            React Native and native mobile architecture<br />
            Mobile accessibility<br />
            TypeScript and modern JavaScript<br />
            iOS and Android platform integration<br />
            GraphQL and API architecture<br />
            Application state and data architecture<br />
            Design patterns and software architecture<br />
            Testing and developer tooling<br />
            AWS and serverless backend systems<br />
            AI-assisted software development
          </p>
          <br />
          <p>
            I&apos;m also continuing my computer science education while expanding deeper into algorithms, systems, machine learning, and software architecture.{" "}
            <Link className={styles["inline-link"]} href="/Education">
              See my education and certifications
            </Link>.
          </p>
          <br />

          <h2 className="sub-header">Writing</h2>
          <p>
            I occasionally write about software development and things I&apos;ve learned along the way.
          </p>
          {articles.length > 0 && (
            <ul className={styles['medium-articles']}>
              {articles.map((article) => (
                <li key={article.link}>
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <p>
            <a href="https://medium.com/@amkemp" target="_blank" rel="noopener noreferrer">
              See all posts on Medium
            </a>
          </p>
          <br />

          <p>
            I&apos;m always interested in learning more about <strong>mobile engineering, software architecture, accessibility, and the increasingly blurry line between native and cross-platform development</strong>.
          </p>
          <br />

          <p>
            Outside of engineering, I spend a lot of my time on crafts&mdash;baking, weaving, spinning, knitting, crochet, and more.{" "}
            <Link className={styles["inline-link"]} href="/Crafts">
              Take a look at what I&apos;ve made
            </Link>.
          </p>

          <h2 className={`sub-header ${styles["nyc-info"]}`}>Carnival the Cat</h2>
          <Carousel images={kittyPhotos} altPrefix="Carnival the cat" />
        </div>
      </div>
  )
}

export default AboutMe
