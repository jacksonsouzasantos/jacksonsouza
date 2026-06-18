import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, CheckCircle2, TrendingUp, Users, Zap, Target, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Adicionado AnimatePresence para o fechar do menu ficar suave

const whatsappNumber = '55 83 99816-1003'; 

const openWhatsApp = () => {
  const message = encodeURIComponent('Olá Jackson! Gostaria de solicitar um diagnóstico gratuito para minha empresa.');
  window.open(`https://wa.me/5583998161003?text=${message}`, '_blank');
};

const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString('pt-BR')}</span>;
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> {/* Adicionado overflow-x-hidden para evitar quebras de scroll lateral */}
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex-shrink-0">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663687822829/QTZgq38mbQhk2GtBwKsHzo/logo-mark-hNT5c7rBkHgTovtU8hmmq9.webp"
                alt="Jackson Souza"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="block"> {/* Mudado de hidden sm:block para block para manter identidade no mobile */}
              <div className="text-xs sm:text-sm font-bold leading-tight">Jackson Souza</div>
              <div className="text-[10px] sm:text-xs text-gray-400">Tráfego Pago</div>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium hover:text-primary transition-colors">Início</a>
            <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">Serviços</a>
            <a href="#resultados" className="text-sm font-medium hover:text-primary transition-colors">Resultados</a>
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre</a>
          </nav>

          {/* CTA Button - Desktop */}
          <button onClick={openWhatsApp} className="hidden md:block btn-secondary text-sm md:text-base font-semibold">
            Diagnóstico Grátis
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors z-50"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 space-y-3">
                <a href="#inicio" onClick={closeMobileMenu} className="block px-4 py-2 text-sm font-medium hover:text-primary hover:bg-secondary/30 rounded-lg transition-colors">Início</a>
                <a href="#servicos" onClick={closeMobileMenu} className="block px-4 py-2 text-sm font-medium hover:text-primary hover:bg-secondary/30 rounded-lg transition-colors">Serviços</a>
                <a href="#resultados" onClick={closeMobileMenu} className="block px-4 py-2 text-sm font-medium hover:text-primary hover:bg-secondary/30 rounded-lg transition-colors">Resultados</a>
                <a href="#sobre" onClick={closeMobileMenu} className="block px-4 py-2 text-sm font-medium hover:text-primary hover:bg-secondary/30 rounded-lg transition-colors">Sobre</a>
                <button
                  onClick={() => { openWhatsApp(); closeMobileMenu(); }}
                  className="w-full btn-secondary text-sm font-semibold mt-4 py-3"
                >
                  Diagnóstico Grátis
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663687822829/QTZgq38mbQhk2GtBwKsHzo/hero-abstract-bg-jcXQepmiCb24ZDabW3Gyhx.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent" />

              <div>
                {/* TIPOGRAFIA AJUSTADA AQUI PARA MOBILE */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 tracking-tight">
                   Pare de perder os seus clientes
                </h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                  Enquanto seus concorrentes aparecem no Google e nas redes sociais, você fica para trás. Eu ajudo empresas locais a atrair mais clientes através de estratégias comprovadas de tráfego pago.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="space-y-3 pt-2">
                {[
                  '6 anos de experiência em tecnologia',
                  'Especialista em tráfego pago',
                  'Estratégias focadas em resultados mensuráveis'
                ].map((badge, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <span className="text-sm font-medium text-gray-200">{badge}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 text-base font-bold py-3 px-6">
                  Quero Mais Clientes
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={openWhatsApp}
                  className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2 text-base font-bold py-3 px-6"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </button>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-3xl" />
                <img
                  src="/logo02gestordetrafego.png"
                  alt="Jackson Souza"
                  className="relative w-full h-full object-cover rounded-3xl border-2 border-primary/40 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-16 md:py-32 bg-secondary/20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* TITULO AJUSTADO */}
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
                Seus clientes estão indo para a concorrência
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4"
            >
              {[
                { icon: '📞', text: 'Poucos clientes entrando em contato' },
                { icon: '🤝', text: 'Dependência de indicações' },
                { icon: '🔍', text: 'Concorrentes aparecendo primeiro no Google' },
                { icon: '📱', text: 'Baixo retorno das redes sociais' },
                { icon: '📊', text: 'Falta de previsibilidade nas vendas' },
                { icon: '💰', text: 'Investimento em anúncios sem resultado' },
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 rounded-lg p-4 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl flex-shrink-0">{problem.icon}</span>
                    <p className="font-medium text-gray-200 text-sm sm:text-base">{problem.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div className="text-center mt-12 md:mt-16">
            <p className="text-base sm:text-lg text-gray-300 mb-6 font-medium">
              Se você se identifica com esses problemas, é hora de agir.
            </p>
            <button onClick={openWhatsApp} className="btn-secondary text-base font-bold w-full sm:w-auto">
              Solicitar Análise Gratuita
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Serviços Especializados</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent" />
            <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl">
              Soluções completas de tráfego pago e marketing digital para empresas que querem crescer rápido.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              { title: 'Gestão de Tráfego Pago', description: 'Campanhas otimizadas para gerar leads e vendas com ROI comprovado.', icon: TrendingUp },
              { title: 'Google Ads', description: 'Apareça para quem está procurando seus serviços agora mesmo.', icon: Target },
              { title: 'Meta Ads', description: 'Anúncios estratégicos no Instagram e Facebook para sua audiência certa.', icon: Users },
              { title: 'Landing Pages', description: 'Páginas de alta conversão desenvolvidas para transformar visitantes em clientes.', icon: Zap },
              { title: 'Consultoria Digital', description: 'Estratégias personalizadas e mensuráveis para crescimento acelerado.', icon: Target },
              { title: 'Automações', description: 'Sistemas que reduzem trabalho manual e aumentam a produtividade.', icon: Zap },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-gradient-to-br from-card to-secondary/30 border border-primary/20 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-16 md:py-32 bg-secondary/20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Por que contratar Jackson Souza?</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl"
          >
            {[
              '6 anos de experiência em tecnologia',
              'Conhecimento em programação e desenvolvimento',
              'Especialista em marketing digital',
              'Visão estratégica de negócios',
              'Atendimento personalizado e dedicado',
              'Foco total em resultados mensuráveis',
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex items-center gap-4 p-4 md:p-6 bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 rounded-lg hover:border-primary/50 transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-sm sm:text-base font-medium group-hover:text-primary transition-colors">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-16 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Resultados que Comprovam</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { number: 500000, label: 'Impactos Gerados', suffix: '+' },
              { number: 300, label: 'Aumento de Visibilidade', suffix: '+%' },
              { number: 150, label: 'Leads Gerados', suffix: '+' },
              { number: 95, label: 'Clientes Satisfeitos', suffix: '%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative text-center p-6 md:p-8 bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 rounded-2xl hover:border-primary/50 transition-all"
              >
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    <Counter end={stat.number} />
                    {stat.suffix}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-16 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">O que Meus Clientes Dizem</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              { text: 'Em menos de 30 dias começamos a receber contatos diariamente pelo WhatsApp. Transformou completamente nosso negócio.', author: 'Carlos Mendes', role: 'Empresário' },
              { text: 'O investimento se pagou rapidamente. Jackson é um profissional excepcional que realmente entende de tráfego pago.', author: 'Juliana Costa', role: 'Proprietária de Clínica' },
              { text: 'Nossa empresa finalmente começou a aparecer no Google. Os resultados superaram nossas expectativas.', author: 'Roberto Lima', role: 'Loja Local' },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-card to-secondary/30 border border-primary/20 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all"
              >
                <div className="relative z-10">
                  <div className="text-accent opacity-30 text-4xl mb-2">"</div>
                  <p className="text-gray-200 text-sm sm:text-base mb-6 italic leading-relaxed">{testimonial.text}</p>
                  <div className="border-t border-primary/20 pt-4">
                    <p className="font-bold text-primary text-sm sm:text-base">{testimonial.author}</p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Meu Processo Comprovado</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent" />
          </motion.div>

          {/* ADICIONADO COLS-1 E SM:COLS-2 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { step: '01', title: 'Diagnóstico Gratuito', description: 'Análise completa da sua situação atual' },
              { step: '02', title: 'Planejamento Estratégico', description: 'Desenvolvimento de estratégia personalizada' },
              { step: '03', title: 'Implementação', description: 'Execução das campanhas e estratégias' },
              { step: '04', title: 'Otimização Contínua', description: 'Monitoramento e melhorias constantes' },
            ].map((process, index) => (
              <motion.div key={index} variants={itemVariants} className="group relative">
                <div className="bg-gradient-to-br from-card to-secondary/30 border border-primary/20 rounded-2xl p-6 md:p-8 text-center h-full flex flex-col justify-between hover:border-primary/50 transition-all">
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">{process.step}</div>
                    <h3 className="text-lg md:text-xl font-bold mb-3">{process.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">{process.description}</p>
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     {/* About Section */}
      <section id="sobre" className="py-16 md:py-32 bg-secondary/20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* Imagem - Agora visível em todos os tamanhos. No mobile ela vem primeiro (order-1), no desktop ela se alinha à esquerda (md:order-1) */}
            <div className="relative order-1 md:order-1 max-w-md mx-auto md:max-w-none w-full">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-3xl" />
                <img
                  src="/gestordetrafegooficial.png"
                  alt="Jackson Souza"
                  className="relative w-full h-full object-cover rounded-3xl border-2 border-primary/40 shadow-2xl"
                />
              </div>
            </div>

            {/* Texto - No mobile fica abaixo da foto (order-2), no desktop fica à direita (md:order-2) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8 order-2 md:order-2"
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">Sobre Jackson Souza</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent" />
              
              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Atuo há mais de 6 anos na área de tecnologia, desenvolvendo soluções digitais, estratégias de marketing e campanhas de tráfego pago voltadas para geração de resultados mensuráveis.
                </p>
                <p>
                  Minha missão é simples: ajudar empresas locais a conquistarem mais clientes através da internet utilizando estratégias inteligentes, comprovadas e focadas em ROI.
                </p>
                <p className="font-medium text-primary">
                  Não trabalho com promessas vazias. Trabalho com resultados.
                </p>
              </div>
              
              <button onClick={openWhatsApp} className="btn-primary text-base font-bold w-full sm:w-auto">
                Vamos Conversar
              </button>
            </motion.div>
          </div>
        </div>
      </section>

    {/* Final CTA Section */}
    <section className="py-16 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">Pronto para dominar o seu mercado local?</h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto">
          Não deixe dinheiro na mesa enquanto seus concorrentes crescem. Reserve agora sua sessão de diagnóstico 100% gratuita.
        </p>
        <button onClick={openWhatsApp} className="btn-primary text-base font-bold py-4 px-8 w-full sm:w-auto">
          Garantir Meu Diagnóstico Gratuito
        </button>
      </div>
    </section>

    {/* Footer */}
      <footer className="bg-secondary/50 border-t border-primary/20 py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663687822829/QTZgq38mbQhk2GtBwKsHzo/logo-mark-hNT5c7rBkHgTovtU8hmmq9.webp"
                  alt="Jackson Souza"
                  className="h-8 w-8"
                />
                <div>
                  <div className="font-bold">Jackson Souza Santos</div>
                  <div className="text-xs text-gray-400">Tráfego Pago</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Transformando cliques em clientes desde 2018.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#inicio" className="hover:text-primary transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
                <li><a href="#resultados" className="hover:text-primary transition-colors">Resultados</a></li>
                <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Conecte-se</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Users className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <TrendingUp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-8 text-center text-gray-400 text-sm">
            <p className="mb-2 font-medium">Transformando cliques em clientes.</p>
            <p>&copy; 2026 Jackson Souza Santos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-accent to-yellow-500 text-accent-foreground shadow-lg shadow-accent/50 flex items-center justify-center hover:shadow-xl hover:shadow-accent/60 transition-all font-bold"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
}