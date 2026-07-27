import financeManager from '../assets/finance-manager.mp4'
import contactManager from '../assets/contact-manager.mp4'
import vmDemo from '../assets/vm-demo.mp4'

const projects = [
  {
    id: '01',
    index: 1,
    category: 'Full-Stack Application',
    title: 'Finance',
    titleLine2: 'Manager.',
    titleItalic: null,
    subtitle: 'Personal budgeting & spend insights',
    description:
      'Log every transaction, review monthly spending, and see which categories take the biggest bite out of your budget — a clear picture of where your money goes.',
    href: 'https://g7usercapitalflow.com/login',
    linkLabel: 'VIEW SITE',
    video: financeManager,
    mediaLabel: 'PROJECT 01 · FULL-STACK',
    mediaPlaceholder: '[ APP SCREEN · 4:3 ]',
    mediaGradient: 'linear-gradient(135deg, #0b1a36, #061024 58%, #040a18)',
    stripeAngle: 118,
    radialPosition: '68% 32%',
    layout: 'text-left',
  },
  {
    id: '02',
    index: 2,
    category: 'Full-Stack Application',
    title: 'Contact',
    titleLine2: 'Manager.',
    titleItalic: null,
    subtitle: 'CRUD contacts with live search',
    description:
      'Add, edit, search, and delete contacts in one place — a full-stack app for keeping your network organized and easy to find.',
    href: 'http://contactmanager7.xyz/index.html',
    linkLabel: 'VIEW SITE',
    video: contactManager,
    mediaLabel: 'PROJECT 02 · FULL-STACK',
    mediaPlaceholder: '[ APP SCREEN · 16:9 ]',
    mediaGradient: 'linear-gradient(135deg, #04122c, #0a1a3a 55%, #050c1c)',
    stripeAngle: 62,
    radialPosition: '34% 60%',
    layout: 'text-right',
  },
  {
    id: '03',
    index: 3,
    category: 'Systems // Compilers',
    title: 'Custom VM',
    titleLine2: '& Language',
    titleItalic: 'Parser.',
    subtitle: 'Compiler pipeline & stack-based runtime — 2025',
    description:
      'A full compiler pipeline in C — lexer, recursive-descent parser, and code generator — feeding a custom stack-based virtual machine with 20+ instructions for arithmetic, branching, and memory, plus syntax and runtime error handling.',
    href: 'https://github.com/jadensimmons18/Custom-Virtual-Machine-Language-Parser',
    linkLabel: 'VIEW GITHUB',
    mediaLabel: 'PROJECT 03 · SYSTEMS',
    video: vmDemo,
    mediaPlaceholder: '[ VM · COMPILER · C ]',
    mediaGradient: 'linear-gradient(135deg, #0b1a36, #071230 60%, #040a18)',
    stripeAngle: 118,
    radialPosition: '62% 40%',
    layout: 'text-left',
  },
]

export default projects
