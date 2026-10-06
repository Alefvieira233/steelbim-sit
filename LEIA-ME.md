# SteelBIM — reformulação 2.70

Projeto estático pronto para hospedagem na Vercel. Mantém domínio, identidade em preto e laranja e links fornecidos. Não requer instalação de dependências nem comando de build.

## Publicar na Vercel

1. Extraia o ZIP.
2. No repositório atual, substitua o conteúdo da pasta que a Vercel utiliza como Root Directory pelo conteúdo de `steelbim-upgrade/`. Se a configuração atual aponta para `steelbimFINAL`, mantenha esse nome de pasta.
3. Confirme que `index.html`, `styles.css`, `app.js`, `assets/` e `vercel.json` estão juntos na raiz configurada.
4. Na Vercel, use Framework Preset `Other`, sem Build Command, e Output Directory `.` se necessário. Mantenha as configurações de domínio existentes.
5. Revise o Preview Deployment em desktop e celular, incluindo navegação, abas, ampliação das imagens e os três checkouts, antes de promover para produção.

O HTML foi refeito em formato estático, eliminando o carregador que desempacotava a página antiga no navegador. O conteúdo principal permanece disponível sem JavaScript. JavaScript acrescenta abas, troca de telas acompanhando o scroll, menu móvel e ampliação de imagens.

## Planos e links

- 6 meses: R$ 997,00 — https://pay.kiwify.com.br/Hk04mOb
- 1 ano: R$ 1.497,00 — https://pay.kiwify.com.br/MlBxoRB
- Vitalício: R$ 4.997,00 — https://pay.kiwify.com.br/gAgmjlI

Removidos os planos de 3 meses e a divisão Pro/Enterprise. Não foram inventados parcelamentos nem períodos de suporte do vitalício. O site remete às condições do checkout/equipe até que o proprietário confirme suporte e atualizações.

## Conteúdo e imagens

Recursos fundamentados no manual 2.70 e nas imagens fornecidas: motor de ligações, IFC, galpão em 1 clique, detalhamento completo, perfis, cotas, montagem e fabricação. Imagens otimizadas em WebP; produto preservado. Prints de treliças e vigas usados como demonstrações principais. As telas antigas de ligações foram substituídas pelas novas capturas fornecidas em 06/10, preservadas integralmente em WebP sem perdas. A abertura oferece cinco exemplos selecionáveis: mísula, chapa estendida, emenda, contraventamento duplo e barra com cantoneira. A seção seguinte liga modelagem à ferramenta Detalhar Ligações. Depoimento transcrito do feedback fornecido, sem publicar a conversa completa.

Mantido o WhatsApp do site original: +55 96 98141-9460. Confirmar se esse continua sendo o número comercial desejado.

## Verificação

Verificados sintaxe JavaScript, estrutura HTML, IDs e referências, arquivos e links locais, valores e checkouts. A versão inclui layouts adaptáveis, navegação de abas por teclado, foco visível, textos alternativos e preferência por movimento reduzido.

Não houve validação visual em navegador nem publicação na Vercel neste ambiente. Validar o Preview Deployment antes da produção. Nenhum script de Pixel/GTM foi acrescentado; eventos de checkout e contato são emitidos se os rastreadores já estiverem carregados. Se o projeto em produção tiver integrações que não constam no ZIP original, reaplicá-las.

## Vídeo de demonstração

Short fornecido: https://www.youtube.com/shorts/sYc4ShUT038

Botão na abertura abre um player vertical em janela modal. O player só carrega ao clicar, não toca automaticamente e é descarregado ao fechar. Há link para abrir no YouTube se a incorporação estiver indisponível. A reprodução deve ser verificada no Preview Deployment: o vídeo não pôde ser reproduzido neste ambiente. A incorporação depende da disponibilidade e permissões do vídeo no YouTube.

## Copy e ordem comercial

Aplicada copy aprovada: benefícios concretos, demonstração real, parâmetros editáveis e controle técnico. Sequência: abertura, motor de ligações e detalhamento de ligações, IFC, galpão em 1 clique, painel de treliças, executivo completo, vigas/perfis, ferramentas, desenvolvedores e feedback, planos e FAQ. Botão de WhatsApp abre mensagem para avaliar adequação aos projetos. Não há escassez artificial, promessas de resistência ou economia de tempo inventada.
