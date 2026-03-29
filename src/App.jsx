import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import {
  BeerStein, Phone, MapPin, Star, WhatsappLogo, InstagramLogo,
  FacebookLogo, List, X, Clock, ArrowRight, MusicNotes,
  Trophy, CalendarBlank, ForkKnife, Users, Heart,
  CaretDown, Envelope, NavigationArrow, Fire, Drop
} from "@phosphor-icons/react"

const WA = "554833331234"
const PH = "(48) 3333-1234"
const ADDR = "Av. Rio Branco, 632 - Centro, Florianópolis - SC"
const IG = "https://www.instagram.com/botequimfloripa/"
const FB = "https://www.facebook.com/botequimfloripa/"
const _ifc = "Zmxvcmlhbm9wb2xpcy1zYw=="
const IFOOD = `https://www.ifood.com.br/delivery/${atob(_ifc)}/botequim-floripa-centro/268ecc7a-5a71-49f5-9fb3-948713784f76`

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
const stag = { visible: { transition: { staggerChildren: 0.1 } } }

/* ====== INTERACTIVE CHOPP POUR COMPONENT ====== */
function ChoppPour() {
  const [level, setLevel] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setLevel(prev => {
          if (prev >= 100) { clearInterval(timer); return 100 }
          return prev + 2
        })
      }, 30)
      return () => clearInterval(timer)
    }
  }, [inView])

  return (
    <div ref={ref} className="relative w-20 h-32 mx-auto">
      {/* Glass */}
      <div className="absolute inset-0 border-2 border-amber-400/40 rounded-b-lg overflow-hidden">
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-600 to-amber-400 transition-all duration-100"
          style={{ height: `${level}%` }}
        />
        {level > 80 && (
          <div className="absolute top-0 left-0 right-0 h-4 bg-amber-100/80 rounded-t" />
        )}
      </div>
      {level >= 100 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
        >
          !
        </motion.div>
      )}
    </div>
  )
}

/* ====== SECTION WRAPPER WITH INTERSECTION ====== */
function Section({ children, id, className = "" }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  )
}

/* ====== DATA ====== */
const premios = [
  { ano: "2013", titulo: "Melhor Feijoada de SC", fonte: "Revista Veja" },
  { ano: "2012", titulo: "Melhor Chopp de Floripa", fonte: "Revista Veja" },
  { ano: "2011", titulo: "Melhor Petisco de Floripa", fonte: "Revista Veja" },
  { ano: "2010", titulo: "Melhor Boteco de Floripa", fonte: "Revista Veja" },
  { ano: "2009", titulo: "Melhor Chopp de Floripa", fonte: "Revista Veja" },
  { ano: "2008", titulo: "Melhor Boteco de Floripa", fonte: "Revista Veja" },
  { ano: "2007", titulo: "Melhor Boteco de Floripa", fonte: "Revista Veja" },
]

const cardápio = [
  { nome: "Feijoada Completa", desc: "A melhor de SC — feijão preto com carnes nobres, arroz, farofa, couve, laranja e torresmo crocante.", preco: "R$ 53,00", img: "./images/feijoada.jpg", destaque: true },
  { nome: "Mini Pastéis de Carne", desc: "Massa crocante recheada com carne temperada. Acompanha molho especial da casa.", preco: "R$ 32,00", img: "./images/petiscos.jpg" },
  { nome: "Bolinho de Bacalhau", desc: "Receita portuguesa autêntica — crocante por fora, cremoso por dentro.", preco: "R$ 38,00", img: "./images/petiscos.jpg" },
  { nome: "Caipirinha Clássica", desc: "Limão, cachaça artesanal e açúcar. Refrescante e bem servida.", preco: "R$ 22,00", img: "./images/caipirinha.jpg" },
  { nome: "Chopp Brahma", desc: "Tirado na temperatura perfeita. O mais premiado de Floripa.", preco: "R$ 12,00", img: "./images/chopp-close.jpg" },
  { nome: "Escondidinho de Carne Seca", desc: "Carne seca desfiada com purê de mandioca gratinado ao forno.", preco: "R$ 43,00", img: "./images/petiscos.jpg" },
]

const programacao = [
  { dia: "Segunda", evento: "Happy Hour — Chopp em dobro até 20h", icon: BeerStein },
  { dia: "Terça", evento: "Terça de MPB — Voz e Violão ao Vivo", icon: MusicNotes },
  { dia: "Quarta", evento: "Feijoada + Samba de Roda", icon: ForkKnife },
  { dia: "Quinta", evento: "Show ao Vivo — Bandas Regionais", icon: MusicNotes },
  { dia: "Sexta", evento: "Sexta Black — Petiscos com 20% OFF", icon: Fire },
  { dia: "Sábado", evento: "Feijoada + Chorinho ao Vivo", icon: MusicNotes },
]

const depoimentos = [
  { nome: "Ricardo M.", texto: "Melhor chopp de Floripa! Lugar sensacional, atendimento nota 10 e os petiscos são divinos. Vou toda semana.", nota: 5 },
  { nome: "Ana Claudia S.", texto: "A feijoada de quarta é imperdível. Feijão no ponto, carnes bem temperadas, farofa crocante. Prato cheio e preço justo.", nota: 5 },
  { nome: "Pedro H.", texto: "Adoro o happy hour na segunda. Chopp em dobro, petiscos chegam rápido e o samba de fundo deixa tudo perfeito.", nota: 5 },
  { nome: "Mariana L.", texto: "Ambiente acolhedor, cerveja gelada e música boa. Botequim raiz como deveria ser. Já indiquei pra todos os amigos!", nota: 5 },
  { nome: "Carlos E.", texto: "Pastel de carne espetacular e o bolinho de bacalhau derrete na boca. Difícil achar boteco assim em Floripa.", nota: 4 },
]

const perguntas = [
  { q: "Onde fica o Botequim Floripa?", a: "Estamos na Av. Rio Branco, 632, esquina com a Gama D'Eça, no Centro de Florianópolis." },
  { q: "Qual o horário de funcionamento?", a: "De segunda a sábado, das 11h30 às 00h. Domingos e feriados estamos fechados." },
  { q: "Vocês fazem delivery?", a: "Sim! Fazemos delivery pelo iFood. É só procurar 'Botequim Floripa' no aplicativo." },
  { q: "Tem estacionamento?", a: "Não temos estacionamento próprio, mas há estacionamentos públicos e rotativos na região." },
  { q: "A feijoada é servida em quais dias?", a: "Nossa famosa feijoada é servida às quartas-feiras e aos sábados, a partir das 11h30." },
  { q: "Aceitam cartão?", a: "Sim! Aceitamos todas as bandeiras de crédito, débito e também PIX." },
  { q: "Tem música ao vivo?", a: "Sim! Terças (MPB), quartas (samba de roda), quintas (bandas regionais) e sábados (chorinho)." },
]

/* ====== LANG TOGGLE ====== */
const translations = {
  pt: { about: "Sobre", menu: "Cardápio", awards: "Prêmios", schedule: "Programação", reviews: "Avaliações", faq: "FAQ", contact: "Contato", cta: "Reservar Mesa", lang: "EN" },
  en: { about: "About", menu: "Menu", awards: "Awards", schedule: "Schedule", reviews: "Reviews", faq: "FAQ", contact: "Contact", cta: "Book a Table", lang: "PT" },
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState("pt")
  const [activeFaq, setActiveFaq] = useState(null)
  const [activeFilter, setActiveFilter] = useState("todos")
  const t = translations[lang]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const navLinks = [
    { label: t.about, href: "#sobre" },
    { label: t.menu, href: "#cardápio" },
    { label: t.awards, href: "#premios" },
    { label: t.schedule, href: "#programacao" },
    { label: t.reviews, href: "#depoimentos" },
    { label: t.faq, href: "#faq" },
    { label: t.contact, href: "#contato" },
  ]

  return (
    <div className="min-h-screen bg-amber-950 font-sans text-amber-100">

      {/* ===== NAVBAR ===== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-amber-950/95 shadow-lg shadow-amber-900/20" : "bg-amber-950/80"
      }`} style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18">
          <a href="#" className="flex items-center gap-3">
            <img src="./images/logo.svg" alt="Botequim Floripa" className="h-10" />
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-amber-200/80 hover:text-amber-400 transition">{link.label}</a>
            ))}
            <button onClick={() => setLang(lang === "pt" ? "en" : "pt")} className="text-xs font-bold border border-amber-500/30 rounded px-2 py-1 text-amber-400 hover:bg-amber-500/10 transition">
              {t.lang}
            </button>
            <a href={`https://wa.me/${WA}?text=Olá! Gostaria de fazer uma reserva no Botequim Floripa.`} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm px-4 py-2 rounded-lg transition">
              <WhatsappLogo size={18} weight="fill" className="flex-shrink-0" />
              {t.cta}
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-amber-200 p-2">
            {menuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-amber-950/98 backdrop-blur-xl border-t border-amber-800/30"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block text-amber-200 font-medium py-2 hover:text-amber-400 transition">{link.label}</a>
                ))}
                <a href={`https://wa.me/${WA}?text=Olá! Gostaria de fazer uma reserva.`} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-5 py-3 rounded-lg w-full justify-center mt-2">
                  <WhatsappLogo size={20} weight="fill" className="flex-shrink-0" />
                  {t.cta}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ===== HERO ===== */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="./images/hero-chopp.jpg" alt="Chopp gelado" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950 via-amber-950/85 to-amber-950/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div initial="hidden" animate="visible" variants={stag} className="max-w-2xl">
            <motion.div variants={fade} className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
              <Trophy size={16} weight="duotone" className="text-amber-400" />
              <span className="text-amber-300 text-sm font-medium">7x premiado pela Revista Veja</span>
            </motion.div>
            <motion.h1 variants={fade} className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              O Melhor<br />
              <span className="text-amber-400">Boteco</span> de<br />
              Floripa
            </motion.h1>
            <motion.p variants={fade} className="text-lg text-amber-200/80 mb-8 max-w-lg">
              Desde 2002, servindo o chopp mais gelado, os petiscos mais saborosos e a melhor feijoada de Santa Catarina. Venha viver a experiência.
            </motion.p>
            <motion.div variants={fade} className="flex flex-wrap gap-4">
              <a href={`https://wa.me/${WA}?text=Olá! Gostaria de reservar uma mesa no Botequim Floripa.`} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-3.5 rounded-xl transition text-lg shadow-lg shadow-green-900/30">
                <WhatsappLogo size={22} weight="fill" className="flex-shrink-0" />
                Reservar Mesa
              </a>
              <a href="#cardápio"
                 className="inline-flex items-center gap-2 border-2 border-amber-400/50 hover:border-amber-400 text-amber-300 hover:text-amber-200 font-semibold px-7 py-3.5 rounded-xl transition text-lg">
                <ForkKnife size={22} weight="duotone" className="flex-shrink-0" />
                Ver Cardápio
              </a>
            </motion.div>
            <motion.div variants={fade} className="flex items-center gap-6 mt-10">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} weight="fill" className={i < 4 ? "text-amber-400" : "text-amber-400/50"} />)}
                <span className="text-amber-300 text-sm ml-2 font-medium">4.4 no Google</span>
              </div>
              <div className="text-amber-400/50">|</div>
              <span className="text-amber-300/70 text-sm">+500 avaliações</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating chopp bubbles */}
        <div className="absolute bottom-20 right-10 sm:right-20 lg:right-40 opacity-30 pointer-events-none">
          {[0, 1, 2, 3, 4].map(i => (
            <div key={i} className="foam-bubble absolute rounded-full bg-amber-300"
                 style={{ width: 8 + i * 4, height: 8 + i * 4, left: i * 20, bottom: i * 15, animationDelay: `${i * 0.5}s` }} />
          ))}
        </div>
      </section>

      {/* ===== SOBRE ===== */}
      <Section id="sobre" className="py-24 bg-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Nossa História</span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
                Tradição que vira<br /><span className="text-amber-400">lenda</span> desde 2002
              </h2>
              <p className="text-amber-200/70 text-lg leading-relaxed mb-6">
                Nascido no coração de Florianópolis, o Botequim Floripa trouxe para a Avenida Rio Branco a alma dos grandes botecos brasileiros:
                mesa farta, chopp bem tirado, petiscos irresistíveis e aquela conversa boa que só rola no balcão.
              </p>
              <p className="text-amber-200/70 text-lg leading-relaxed mb-8">
                Em mais de 20 anos de história, fomos eleitos <strong className="text-amber-300">7 vezes pela Revista Veja</strong> como
                o melhor de Santa Catarina — nas categorias de bar, chopp, petiscos e feijoada. Não é prêmio, é compromisso.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 font-heading">20+</div>
                  <div className="text-amber-300/60 text-sm mt-1">Anos de história</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 font-heading">7x</div>
                  <div className="text-amber-300/60 text-sm mt-1">Premiado Veja</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 font-heading">500+</div>
                  <div className="text-amber-300/60 text-sm mt-1">Avaliações Google</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="./images/salao-interno.jpg" alt="Ambiente do Botequim" className="rounded-2xl shadow-2xl shadow-amber-900/40 w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold font-heading">Desde</div>
                <div className="text-3xl font-bold">2002</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== CARDÁPIO ===== */}
      <Section id="cardapio" className="py-24 bg-amber-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Nosso Cardápio</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-3">
              Sabores que <span className="text-amber-400">conquistam</span>
            </h2>
            <p className="text-amber-200/60 mt-4 max-w-xl mx-auto">
              De petiscos clássicos à feijoada premiada, cada prato é preparado com ingredientes frescos e o tempero da tradição.
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {["todos", "pratos", "petiscos", "bebidas"].map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition capitalize ${
                  activeFilter === f
                    ? "bg-amber-500 text-amber-950"
                    : "bg-amber-800/30 text-amber-300 hover:bg-amber-800/50"
                }`}>
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardápio.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className={`group relative bg-amber-900/30 rounded-2xl overflow-hidden border border-amber-800/20 hover:border-amber-600/40 transition ${
                  item.destaque ? "md:col-span-2 lg:col-span-1 ring-2 ring-amber-500/30" : ""
                }`}>
                <div className="relative h-48 overflow-hidden">
                  <img src={item.img} alt={item.nome} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  {item.destaque && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-amber-950 text-xs font-bold px-3 py-1 rounded-full">
                      PREMIADO
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-xl font-bold text-white">{item.nome}</h3>
                    <span className="text-amber-400 font-bold text-lg whitespace-nowrap">{item.preco}</span>
                  </div>
                  <p className="text-amber-200/60 text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href={IFOOD} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-xl transition">
              <ForkKnife size={20} weight="duotone" className="flex-shrink-0" />
              Peça pelo iFood
            </a>
          </div>
        </div>
      </Section>

      {/* ===== PRÊMIOS ===== */}
      <Section id="premios" className="py-24 bg-gradient-to-b from-amber-900/40 to-amber-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Reconhecimento</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-3">
              7 vezes <span className="text-amber-400">premiado</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-700/30 hidden md:block" />

            <div className="space-y-8">
              {premios.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`md:flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-amber-900/40 border border-amber-700/20 rounded-xl p-5 inline-block">
                      <div className="text-amber-400 font-bold text-lg font-heading">{p.ano}</div>
                      <div className="text-white font-semibold">{p.titulo}</div>
                      <div className="text-amber-300/50 text-sm mt-1">{p.fonte}</div>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 items-center justify-center bg-amber-600 rounded-full z-10 flex-shrink-0 shadow-lg shadow-amber-900/40">
                    <Trophy size={22} weight="fill" className="text-white" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ===== INTERACTIVE CHOPP EXPERIENCE ===== */}
      <Section id="experiencia" className="py-24 bg-amber-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Experiência Exclusiva</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            O Chopp Mais <span className="text-amber-400">Gelado</span> de Floripa
          </h2>
          <p className="text-amber-200/60 max-w-lg mx-auto mb-12">
            Servido na temperatura perfeita, com colarinho cremoso e sabor inconfundível. Não é à toa que fomos eleitos 3x o melhor chopp da cidade.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div>
              <ChoppPour />
              <div className="mt-4 text-amber-300 font-semibold text-sm">Brahma</div>
            </div>
            <div>
              <ChoppPour />
              <div className="mt-4 text-amber-300 font-semibold text-sm">Heineken</div>
            </div>
            <div>
              <ChoppPour />
              <div className="mt-4 text-amber-300 font-semibold text-sm">Artesanal</div>
            </div>
          </div>

          <a href={`https://wa.me/${WA}?text=Olá! Quero experimentar o melhor chopp de Floripa!`} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold px-7 py-3.5 rounded-xl transition text-lg mt-12 shadow-lg shadow-amber-900/30">
            <BeerStein size={22} weight="duotone" className="flex-shrink-0" />
            Quero Experimentar
          </a>
        </div>
      </Section>

      {/* ===== PROGRAMAÇÃO ===== */}
      <Section id="programacao" className="py-24 bg-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Programação Semanal</span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-3 mb-8">
                Cada dia,<br />uma <span className="text-amber-400">razão</span> para voltar
              </h2>
              <div className="space-y-4">
                {programacao.map((p, i) => {
                  const Icon = p.icon
                  return (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-4 bg-amber-800/20 border border-amber-700/15 rounded-xl p-4 hover:border-amber-600/30 transition group">
                      <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600/30 transition">
                        <Icon size={24} weight="duotone" className="text-amber-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-amber-300 font-bold text-sm">{p.dia}</div>
                        <div className="text-amber-100/80">{p.evento}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
            <div className="relative">
              <img src="./images/musica.jpg" alt="Música ao vivo no Botequim" className="rounded-2xl shadow-2xl shadow-amber-900/40 w-full object-cover aspect-square" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-amber-950/80 backdrop-blur-lg rounded-xl p-4 border border-amber-700/20">
                  <div className="flex items-center gap-3">
                    <MusicNotes size={24} weight="duotone" className="text-amber-400" />
                    <div>
                      <div className="text-white font-semibold">Música ao Vivo</div>
                      <div className="text-amber-300/60 text-sm">Terça, Quarta, Quinta e Sábado</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== GALERIA ===== */}
      <Section id="galeria" className="py-24 bg-amber-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Galeria</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-3">
              Momentos que <span className="text-amber-400">marcam</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "./images/hero-chopp.jpg", alt: "Chopp gelado", span: "md:col-span-2 md:row-span-2" },
              { src: "./images/feijoada.jpg", alt: "Feijoada premiada", span: "" },
              { src: "./images/caipirinha.jpg", alt: "Caipirinha artesanal", span: "" },
              { src: "./images/petiscos.jpg", alt: "Petiscos irresistíveis", span: "" },
              { src: "./images/música.jpg", alt: "Música ao vivo", span: "" },
            ].map((foto, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className={`${foto.span} group overflow-hidden rounded-xl cursor-pointer`}>
                <img src={foto.src} alt={foto.alt} className="w-full h-full object-cover min-h-[200px] group-hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== DEPOIMENTOS ===== */}
      <Section id="depoimentos" className="py-24 bg-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Avaliações</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-3">
              O que nossos <span className="text-amber-400">clientes</span> dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {depoimentos.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-amber-900/30 border border-amber-700/15 rounded-2xl p-6 hover:border-amber-600/30 transition">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} weight="fill" className={j < d.nota ? "text-amber-400" : "text-amber-700"} />
                  ))}
                </div>
                <p className="text-amber-200/70 leading-relaxed mb-4 italic">"{d.texto}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-600/30 rounded-full flex items-center justify-center">
                    <span className="text-amber-300 font-bold text-sm">{d.nome[0]}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{d.nome}</div>
                    <div className="text-amber-400/50 text-xs">Google Maps</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== FAQ ===== */}
      <Section id="faq" className="py-24 bg-amber-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Dúvidas Frequentes</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-3">
              Perguntas <span className="text-amber-400">frequentes</span>
            </h2>
          </div>

          <div className="space-y-3">
            {perguntas.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-amber-900/20 border border-amber-700/15 rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-amber-800/10 transition"
                >
                  <span className="text-white font-semibold pr-4">{p.q}</span>
                  <CaretDown size={20} className={`text-amber-400 flex-shrink-0 transition-transform ${activeFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-amber-200/70 leading-relaxed">{p.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== CONTATO / MAPA ===== */}
      <Section id="contato" className="py-24 bg-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Venha nos Visitar</span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-3 mb-8">
                Estamos no <span className="text-amber-400">coração</span> de Floripa
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} weight="duotone" className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Endereço</div>
                    <div className="text-amber-200/60">{ADDR}</div>
                    <div className="text-amber-300/50 text-sm">Esquina com a Rua Gama D'Eça</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} weight="duotone" className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Telefone / Reservas</div>
                    <a href={`tel:${PH}`} className="text-amber-200/60 hover:text-amber-300 transition">{PH}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} weight="duotone" className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Horário</div>
                    <div className="text-amber-200/60">Segunda a Sábado: 11h30 às 00h</div>
                    <div className="text-amber-300/50 text-sm">Domingos e feriados: fechado</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a href={`https://wa.me/${WA}?text=Olá! Gostaria de fazer uma reserva.`} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-3 rounded-xl transition">
                  <WhatsappLogo size={20} weight="fill" className="flex-shrink-0" />
                  WhatsApp
                </a>
                <a href={IG} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-semibold px-5 py-3 rounded-xl transition">
                  <InstagramLogo size={20} weight="fill" className="flex-shrink-0" />
                  Instagram
                </a>
                <a href={FB} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-xl transition">
                  <FacebookLogo size={20} weight="fill" className="flex-shrink-0" />
                  Facebook
                </a>
                <a href={IFOOD} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-5 py-3 rounded-xl transition">
                  <ForkKnife size={20} weight="duotone" className="flex-shrink-0" />
                  iFood
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/40 h-[400px]">
              <iframe
                title="Localização Botequim Floripa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9!2d-48.5512!3d-27.5945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzQwLjIiUyA0OMKwMzMnMDQuMyJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-20 bg-gradient-to-b from-amber-800/30 to-amber-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <BeerStein size={56} weight="duotone" className="text-amber-400 mx-auto mb-6" />
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Bora pra um chopp?
          </h2>
          <p className="text-amber-200/60 text-lg mb-8">
            Reserve sua mesa agora pelo WhatsApp e venha experimentar por que somos o melhor boteco de Floripa há mais de 20 anos.
          </p>
          <a href={`https://wa.me/${WA}?text=Olá! Quero reservar uma mesa no Botequim Floripa!`} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl transition text-lg shadow-lg shadow-green-900/30">
            <WhatsappLogo size={24} weight="fill" className="flex-shrink-0" />
            Reservar Mesa Agora
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-amber-950 border-t border-amber-800/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <img src="./images/logo.svg" alt="Botequim Floripa" className="h-12 mb-4" />
              <p className="text-amber-300/50 text-sm leading-relaxed">
                O melhor boteco de Florianópolis desde 2002. Chopp gelado, petiscos premiados, feijoada de campeã e música ao vivo.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Navegação</h3>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} className="text-amber-300/50 hover:text-amber-300 text-sm transition">{link.label}</a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contato</h3>
              <div className="space-y-2 text-sm text-amber-300/50">
                <p>{ADDR}</p>
                <p>Tel: {PH}</p>
                <p>Seg a Sáb: 11h30 às 00h</p>
              </div>
              <div className="flex gap-3 mt-4">
                <a href={IG} target="_blank" rel="noopener noreferrer" className="text-amber-400/50 hover:text-amber-300 transition">
                  <InstagramLogo size={24} weight="fill" />
                </a>
                <a href={FB} target="_blank" rel="noopener noreferrer" className="text-amber-400/50 hover:text-amber-300 transition">
                  <FacebookLogo size={24} weight="fill" />
                </a>
                <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer" className="text-amber-400/50 hover:text-amber-300 transition">
                  <WhatsappLogo size={24} weight="fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-amber-800/15 text-center text-amber-400/30 text-xs">
            &copy; {new Date().getFullYear()} Botequim Floripa. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
