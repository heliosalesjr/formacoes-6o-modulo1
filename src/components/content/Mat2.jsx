"use client";

import React from 'react'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { FaUsersCog, FaBookOpen, FaChalkboardTeacher, FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { useState } from 'react'

const Mat2 = () => {

  const ref = useRef();
      const { markAsViewed } = useSidebar();
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              markAsViewed('mat-2');
            }
          },
          { threshold: 0.5 }
        );
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => observer.disconnect();
      }, [markAsViewed]);

  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const dropdownItems = [
    {
      title: "ABORDAGEM DOS CONTEÚDOS DO CADERNO DO EDUCADOR",
      content: "Discussão sobre como o programa enxerga o ensino da Matemática. A ideia não é apenas passar regras, mas construir sentido junto com o aluno. Aborda como atuar como um mediador, ajudando a turma a ligar o que eles já sabem com os novos conceitos financeiros, e discute como metodologias ativas podem deixar a aula mais participativa e estimular o pensamento crítico."
    },
    {
      title: "COMO ENGAJAR OS ESTUDANTES?",
      content: "O capítulo traz ferramentas práticas para conhecer melhor a turma. Tem dicas de como mapear o perfil dos alunos e sondar os conhecimentos matemáticos que eles já trazem, o que é fundamental nessa transição para o 6º ano. Dinâmicas simples, como rodas de conversa, e modelos de fichas para autoavaliação, tudo pensado para estimular a autonomia e a responsabilidade deles desde cedo."
    },
    {
      title: "MAPA ESQUEMÁTICO DOS CONTEÚDOS DE MATEMÁTICA PARA O ENSINO BÁSICO",
      content: "Este espaço funciona como um guia visual para o seu planejamento. Ele mostra como os conteúdos avançam ao longo dos anos finais e onde a Educação Financeira se encaixa na Matemática. No 6º ano, o destaque vai para o Sistema de Numeração Decimal, frações, porcentagem e a leitura de gráficos, ajudando a ver com clareza como conectar cada habilidade da BNCC aos temas do projeto."
    },
    {
      title: "METODOLOGIAS ATIVAS E O TRABALHO DAS IDEIAS FUNDAMENTAIS DE MATEMÁTICA",
      content: "Além de explicar a diferença entre Educação Financeira e Matemática Financeira, este tópico mostra como trabalhar conceitos essenciais da BNCC: Equivalência, Proporcionalidade e Variação. O material traz exemplos do dia a dia, como entender o valor das moedas ou calcular descontos, provando que esses temas abstratos podem ser explorados de um jeito bem prático e que faz sentido para o aluno."
    },
    {
      title: "APRENDIZAGEM BASEADA EM PROJETOS",
      content: "Aqui apresentamos o 'Pequeno Projeto Didático Ativo' (PPDA), uma estratégia para engajar a turma em projetos curtos. Você terá acesso a um roteiro passo a passo, desde a escolha do tema até a apresentação final , incluindo um exemplo pronto sobre sonhos e planejamento. Também disponibilizamos matrizes para avaliar o desenvolvimento das atividades e as competências socioemocionais dos estudantes."
    },
    {
      title: "SUGESTÕES DE ATIVIDADES COM METODOLOGIAS ATIVAS E ESTRATÉGIAS DIDÁTICAS",
      content: "Diversas sugestões de atividades práticas divididas em cinco temas, como sonhos, visita ao mercado e orçamento. A proposta é incentivar os alunos a criarem produtos reais, como mapas mentais, infográficos com dicas de economia e até podcasts sobre consumo consciente, ligando a matemática a questões de sustentabilidade e cidadania de forma criativa."
    },
        {
      title: "REFERÊNCIAS BIBLIOGRÁFICAS, LEITURAS E VÍDEOS",
      content: "Nesta seção, reunimos a base teórica que sustenta nosso trabalho, além de uma curadoria de leituras e vídeos. É o espaço ideal para você que deseja se aprofundar nos conceitos pedagógicos ou buscar inspiração extra para enriquecer suas aulas."
    },

       {
      title: "ANEXO 1 - GABARITO COMENTADO",
      content: "Aqui temos o gabarito comentado de todas as questões do Livro do Estudante. Ele traz as respostas esperadas para os exercícios dos capítulos 1 ao 9, facilitando muito o momento da correção e o suporte às dúvidas da turma."
    }
    
  ]

  return (
    <div ref={ref} id="mat-2" className="bg-white scroll-mt-20 rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10 space-y-10">
          
          {/* Título e Parágrafo */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent pb-8 p-4">
            Conhecendo a estrutura do Caderno do Educador
            </h2>
            <p className="text-slate-700 text-sm md:text-base max-w-3xl mx-auto">
            O Caderno do Educador foi concebido para auxiliar você a integrar em sala de aula tanto a teoria quanto a aplicação prática da Matemática Financeira, oferecendo subsídios valiosos para o planejamento das suas aulas. 
            </p>
          </div>
    
          {/* Seção com 3 blocos */}
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-300">
            
            {/* Bloco 1 */}
          <div className="md:w-1/3 px-4 md:px-6 pb-6 md:pb-0 flex flex-col items-center text-center md:text-left">
            <FaUsersCog className="text-indigo-600 text-3xl mb-4" />
            <h3 className="text-slate-700 font-bold text-lg mb-3">Papel do educador</h3>
            <p className="text-slate-700 text-sm md:text-base">
              Em vez de um manual rígido, o caderno reúne sugestões e referências que valorizam a experiência única do(a) educador(a) como mediador(a) da aprendizagem, promovendo a autonomia dos estudantes.
            </p>
          </div>

          {/* Bloco 2 */}
          <div className="md:w-1/3 px-4 md:px-6 py-6 md:py-0 flex flex-col items-center text-center md:text-left">
            <FaBookOpen className="text-emerald-600 text-3xl mb-4" />
            <h3 className="text-slate-700 font-bold text-lg mb-3">Finalidade pedagógica</h3>
            <p className="text-slate-700 text-sm md:text-base">
              Apresenta ideias e orientações que ajudam os estudantes a explorar conceitos de Educação Financeira integrados à Matemática, desenvolvendo também competências socioemocionais previstas na BNCC, por meio de projetos práticos.
            </p>
          </div>

          {/* Bloco 3 */}
          <div className="md:w-1/3 px-4 md:px-6 pt-6 md:pt-0 flex flex-col items-center text-center md:text-left">
            <FaChalkboardTeacher className="text-yellow-500 text-3xl mb-4" />
            <h3 className="text-slate-700 font-bold text-lg mb-3">Metodologias e estrutura</h3>
            <p className="text-slate-700 text-sm md:text-base">
              A proposta é aplicar metodologias ativas por meio de atividades significativas, organizadas em alinhamento com os capítulos do <em>Livro do Estudante</em>.
            </p>
          </div>
          </div>
          
          {/* Seção de Dropdowns */}
          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-semibold text-center text-slate-800 mb-6">
              Estrutura do Caderno do Educador
            </h3>
            <div className="space-y-4 max-w-4xl mx-auto">
              {dropdownItems.map((item, index) => (
                <Collapsible 
                  key={index}
                  open={openItems[index]}
                  onOpenChange={() => toggleItem(index)}
                >
                  <CollapsibleTrigger className="w-full">
                    <div className="bg-slate-100 hover:bg-slate-200 transition-all duration-300 rounded-xl p-4 shadow-md text-slate-700 text-sm md:text-base flex items-center justify-between gap-2 cursor-pointer">
                      <div className="flex items-start gap-2 text-left">
                        <span className="font-semibold text-slate-600">{index + 1}.</span> 
                        <span className='font-bold'>{item.title}</span>
                      </div>
                      {openItems[index] ? (
                        <FaChevronDown className="text-slate-500 flex-shrink-0" />
                      ) : (
                        <FaChevronRight className="text-slate-500 flex-shrink-0" />
                      )}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-2 p-4 bg-slate-50 rounded-xl border-l-4 border-slate-300">
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>

            <div className="text-center mt-10 space-y-6">
        <h3 className="text-2xl font-semibold text-slate-700">
          Veja uma amostra de um de nossos Cadernos do Educador
        </h3>
        <div className="w-full h-[800px]">
          <iframe
            src="/caderno_educador_6º_ano_-27-28.pdf"
            className="w-full h-full rounded-xl border"
            title="Amostra Caderno do Educador"
          ></iframe>
        </div>
      </div>
          </div>
          
        </div>  
  )
}

export default Mat2