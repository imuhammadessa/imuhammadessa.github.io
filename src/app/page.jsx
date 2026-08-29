/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import Kpitb from '@/images/logos/Kpitb.svg'
import Kpyouth from '@/images/logos/Kpyouth.svg'
import Eduonix from '@/images/logos/eduonix.svg'
import InternsPakistan from '@/images/logos/InternsPakistan.svg'
import TheMentorsPakistan from '@/images/logos/thementorspakistan.svg'
import TechMentors from '@/images/logos/techmentors.svg'
import SadatTransport from '@/images/logos/SadatTransport.svg'
import PureCodes from '@/images/logos/PureCodes.svg'
import McKinseyCompany from '@/images/logos/McKinseyCompany.svg'
import DPD from '@/images/logos/DPD.png'
import OEC from '@/images/logos/OEC.png'
import CYBERVISION from '@/images/logos/cybervision.png'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function CertificationsIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 6h16v12H4V6z" // Outer rectangle (certificate body)
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M4 6l8 6 8-6" // Top of the certificate (like a ribbon or banner)
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <circle
        cx="12"
        cy="14"
        r="2"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />{' '}
      {/* Circular part representing the seal */}
      <path
        d="M8 20l4-4 4 4"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />{' '}
      {/* Ribbon or banner at the bottom */}
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Certificate({ certificate }) {
  let startLabel =
    typeof certificate.start === 'string'
      ? certificate.start
      : certificate.start.label

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={certificate.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {certificate.company}
        </dd>
        <dt className="sr-only">Title</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {certificate.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
          <time dateTime={certificate.start}>{startLabel}</time>{' '}
        </dd>
      </dl>
    </li>
  )
}

function Certificates() {
  let certificates = [
    {
      company: 'McKinsey & Company',
      title: 'Professional Career Growth',
      logo: McKinseyCompany,
      start: '2026',
    },
    {
      company: 'Directorate of Professional Development',
      title: 'Certificate in Human/Educational Psychology',
      logo: DPD,
      start: '2026',
    },
    {
      company: 'Overseas Employment Corporation',
      title: 'Certificate in Soft Skills Development',
      logo: OEC,
      start: '2025',
    },
    {
      company: 'Tech Mentors, Pakistan',
      title: 'Web Applications Developer Associate',
      logo: TechMentors,
      start: '2024',
    },
    {
      company: 'Eduonix Learning Solutions Institute',
      title: 'Certificate in Software Testing',
      logo: Eduonix,
      start: '2022',
    },
    {
      company: 'Cyber Vision International',
      title: 'Certificate in NodeJS development',
      logo: CYBERVISION,
      start: '2021',
    },
    {
      company: 'Khyber Pakhtunkhwa Youth | KPYOUTH',
      title: 'WordPress Development',
      logo: Kpyouth,
      start: '2018',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <CertificationsIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Professional Certifications</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {certificates.map((certificate, index) => (
          <Certificate key={index} certificate={certificate} />
        ))}
      </ol>
    </div>
  )
}

function Resume() {
  let resume = [
    {
      company: 'PureCodes Software Solutions',
      title: 'Full-Stack Developer',
      logo: PureCodes,
      start: '2026',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Tech Mentors, Pakistan',
      title: 'Full-Stack Developer',
      logo: TechMentors,
      start: '2023',
      end: '2026',
    },
    {
      company: 'KP Information Technology Board',
      title: 'Web Developer',
      logo: Kpitb,
      start: '2021',
      end: '2021',
    },
    {
      company: 'Interns Pakistan',
      title: 'Front-end Developer',
      logo: InternsPakistan,
      start: '2020',
      end: '2020',
    },
    {
      company: 'Sadat General Transport',
      title: 'WordPress Developer',
      logo: SadatTransport,
      start: '2018',
      end: '2020',
    },
    {
      company: 'KP Information Technology Board',
      title: 'WordPress Developer',
      logo: Kpitb,
      start: '2017',
      end: '2018',
    },
    {
      company: 'Tech Mentors, Pakistan',
      title: 'Web Developer',
      logo: TheMentorsPakistan,
      start: '2017',
      end: '2017',
    },
  ]

  return (
    <>
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work Experiences</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, index) => (
            <Role key={index} role={role} />
          ))}
        </ol>
        {/* <Button
          href="../pdf/MuhammadEssaResume.pdf"
          variant="secondary"
          className="group mt-6 w-full"
        >
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button> */}
      </div>
    </>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, there. I'm Muhammad
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m a full-stack developer from Pakistan, specializing in AI-powered
            PHP and TypeScript development. I love turning ideas into fast,
            accessible, and scalable web experiences. I’m always exploring the
            evolving tech ecosystem, experimenting with what’s next, and
            building things that push the web forward.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.linkedin.com/in/imuhammadessa/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://github.com/imuhammadessa"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://twitter.com/imuhammadessa"
              aria-label="Follow on X"
              icon={XIcon}
            />
            <SocialLink
              href="https://instagram.com/imuhammadessa"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <Certificates />
          </div>
        </div>
      </Container>
    </>
  )
}
