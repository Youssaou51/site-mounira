"use client";

import BookPage from "@/components/BookPage";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white">
      
      {/* Page 1 - Couverture */}
      <BookPage>
        <motion.div 
          className="text-center space-y-3 sm:space-y-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p 
            className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#8B4867]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            UN SITE POUR TOI
          </motion.p>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#6B4A5A] leading-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            MA SARAUNIYATA
          </motion.h1>

          <motion.p 
            className="text-sm sm:text-base italic text-[#8B4867] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            mon amour • mon évidence • mon bébé
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] my-4 sm:my-5 md:my-6 overflow-hidden rounded-lg shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="/photos/hero-bg.jpg"
            alt="Mounira"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          className="text-center space-y-1.5 sm:space-y-2 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-xs sm:text-sm italic leading-relaxed">
            Des photos, des mots doux et un morceau de mon cœur.
          </p>
          <motion.p 
            className="text-xs sm:text-sm italic text-[#8B4867]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            Écrit avec tendresse, rien que pour toi. ♥
          </motion.p>
        </motion.div>
      </BookPage>

      {/* Page 2 - Préface */}
      <BookPage>
        <div className="space-y-2.5 sm:space-y-3">
          <h2 className="text-lg sm:text-xl text-center text-[#6B4A5A] tracking-wide mb-3 sm:mb-4 px-2">
            AVANT DE COMMENCER...
          </h2>
          
          <p className="font-semibold text-center text-sm sm:text-base">Ma Sarauniyata,</p>

          <p className="text-xs sm:text-sm leading-relaxed text-center px-2">
            J'ai voulu créer ce site parce que parfois, un simple « je t'aime » ne suffit pas à raconter tout ce qu'on ressent. Alors j'ai pris tes photos, j'y ai ajouté quelques mots, et j'en ai fait un souvenir que tu peux garder.
          </p>

          <p className="text-xs sm:text-sm leading-relaxed text-center px-2">
            Tu es mon amour, mon évidence, mon bébé. Ces surnoms sont peut-être simples, mais ils portent chacun une tendresse particulière. Je ne prétends pas trouver toujours les mots parfaits ; je veux surtout que tu sentes la sincérité derrière chacun d'eux.
          </p>

          <p className="text-xs sm:text-sm leading-relaxed text-center px-2">
            Je souhaite que notre histoire grandisse avec de la confiance, du respect, de la patience, des éclats de rire et des conversations honnêtes. Je veux célébrer tes joies, respecter tes rêves et apprendre à mieux t'aimer au fil du temps.
          </p>

          <p className="text-xs sm:text-sm leading-relaxed text-center px-2">
            Ce site est une petite façon de te dire : tu comptes énormément pour moi. ♥
          </p>
        </div>
      </BookPage>

      {/* Page 3 - Chapitre 01 */}
      <BookPage >
        <motion.div 
          className="space-y-1.5 sm:space-y-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base sm:text-lg text-center text-[#6B4A5A] px-2">
            O1 / MA SARAUNIYATA
          </h2>
        </motion.div>
        
        <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[420px] my-3 sm:my-4 overflow-hidden rounded-lg shadow-xl">
          <img
            src="/photos/photo2.jpg"
            alt="Mounira"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.p 
          className="text-xs sm:text-sm leading-relaxed italic text-center mt-2 sm:mt-3 px-3 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "Mon amour, il y a des personnes qu'on rencontre et qui deviennent doucement une évidence. Toi, tu as pris cette place dans mon cœur avec ta douceur, ton sourire et cette lumière qui t'appartient. Je ne veux pas seulement te dire que je t'aime : je veux aussi te le montrer dans les petites attentions, dans l'écoute et dans le respect."
        </motion.p>
      </BookPage>

      {/* Page 4 - Chapitre 02 */}
      <BookPage >
        <div className="space-y-2">
          <h2 className="text-lg text-center text-[#6B4A5A]">
            O2 / MON ÉVIDENCE
          </h2>
        </div>
        
        <div className="relative w-full h-[420px] my-3 overflow-hidden">
          <img
            src="/photos/photo3.jpg"
            alt="Mounira"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-sm leading-relaxed italic text-center mt-3">
          "Tu es mon évidence, pas parce que tout serait toujours parfait, mais parce qu'au milieu du bruit du monde, il y a quelque chose en toi qui me donne envie de choisir encore la tendresse, la patience et le vrai. Je veux apprendre à mieux te connaître, comprendre tes silences, célébrer tes joies et être un soutien quand les journées sont moins légères."
        </p>
      </BookPage>

      {/* Page 5 - Chapitre 03 */}
      <BookPage >
        <div className="space-y-2">
          <h2 className="text-lg text-center text-[#6B4A5A]">
            O3 / MON BÉBÉ, MON SOURIRE
          </h2>
        </div>
        
        <div className="relative w-full h-[420px] my-3 overflow-hidden">
          <img
            src="/photos/photo4.jpg"
            alt="Mounira"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-sm leading-relaxed italic text-center mt-3">
          "Mon bébé, si je pouvais t'offrir une chose chaque matin, ce serait la certitude que tu es précieuse. Que tu n'as pas besoin d'être parfaite pour être aimée, ni de cacher tes émotions pour être comprise. J'espère être une présence qui t'apporte de la paix, du rire et de la confiance."
        </p>
      </BookPage>

      {/* Page 6 - Chapitre 04 */}
      <BookPage >
        <div className="space-y-2">
          <h2 className="text-lg text-center text-[#6B4A5A]">
            O4 / TA BEAUTÉ, TON ÂME
          </h2>
        </div>
        
        <div className="relative w-full h-[420px] my-3 overflow-hidden">
          <img
            src="/photos/photo5.jpg"
            alt="Mounira"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-sm leading-relaxed italic text-center mt-3">
          "Ma Sarauniyata, tes photos capturent de beaux instants, mais elles ne racontent pas tout ce qui fait ta valeur. Il y a aussi la personne que tu es, ta façon de parler, tes gestes, ton énergie et toutes ces petites choses que je découvre avec bonheur. C'est tout cela que j'ai envie d'apprécier."
        </p>
      </BookPage>

      {/* Page 7 - Chapitre 05 */}
      <BookPage >
        <div className="space-y-2">
          <h2 className="text-lg text-center text-[#6B4A5A]">
            O5 / UNE PLACE À PART
          </h2>
        </div>
        
        <div className="relative w-full h-[420px] my-3 overflow-hidden">
          <img
            src="/photos/photo6.jpg"
            alt="Mounira"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-sm leading-relaxed italic text-center mt-3">
          "Dans mon cœur, tu as une place qui ne ressemble à aucune autre. J'aime les moments où l'on rit pour rien, les conversations qui durent, les petites nouvelles de la journée et même les silences où l'on se comprend sans avoir besoin de faire de grands discours."
        </p>
      </BookPage>

      {/* Page 8 - Chapitre 06 */}
      <BookPage >
        <div className="space-y-2">
          <h2 className="text-lg text-center text-[#6B4A5A]">
            O6 / NOS SOUVENIRS À VENIR
          </h2>
        </div>
        
        <div className="relative w-full h-[420px] my-3 overflow-hidden">
          <img
            src="/photos/photo7.jpg"
            alt="Mounira"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-sm leading-relaxed italic text-center mt-3">
          "Je ne sais pas exactement à quoi ressembleront toutes les pages de notre histoire, mais j'aimerais qu'elles soient remplies de sincérité, de complicité, de respect et de beaux souvenirs. Pas besoin d'une histoire parfaite : je veux une histoire vraie, dans laquelle chacun peut rester lui-même."
        </p>
      </BookPage>

      {/* Page 9 - Chapitre 07 */}
      <BookPage >
        <div className="space-y-2">
          <h2 className="text-lg text-center text-[#6B4A5A]">
            O7 / MON AMOUR, EN DOUCEUR
          </h2>
        </div>
        
        <div className="relative w-full h-[420px] my-3 overflow-hidden">
          <img
            src="/photos/photo8.jpg"
            alt="Mounira"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-sm leading-relaxed italic text-center mt-3">
          "Je veux que mon amour pour toi se voie surtout dans mes actes : dans ma manière de t'écouter, de respecter tes limites, de prendre tes rêves au sérieux et de faire de la place à tes émotions. Les mots sont beaux, mais les gestes sincères leur donnent tout leur sens."
        </p>
      </BookPage>

      {/* Page 10 - Chapitre 08 */}
      <BookPage >
        <div className="space-y-2">
          <h2 className="text-lg text-center text-[#6B4A5A]">
            O8 / LE BONHEUR DANS LES PETITES CHOSES
          </h2>
        </div>
        
        <div className="relative w-full h-[420px] my-3 overflow-hidden">
          <img
            src="/photos/photo9.jpg"
            alt="Mounira"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-sm leading-relaxed italic text-center mt-3">
          "Parfois, il suffit d'un message inattendu, d'un rire partagé ou d'un « tu es bien rentrée ? » pour rendre une journée plus douce. J'espère qu'on saura protéger ces petites choses, parce que ce sont souvent elles qui construisent les plus beaux liens."
        </p>
      </BookPage>

      {/* Page 11 - Chapitre 09 */}
      <BookPage >
        <div className="space-y-2">
          <h2 className="text-lg text-center text-[#6B4A5A]">
            O9 / TON COURAGE, TA FORCE
          </h2>
        </div>
        
        <div className="relative w-full h-[420px] my-3 overflow-hidden">
          <img
            src="/photos/photo10.jpg"
            alt="Mounira"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-sm leading-relaxed italic text-center mt-3">
          "J'admire ta force tranquille, cette façon que tu as de continuer d'avancer même quand les journées sont difficiles. Tu es plus courageuse que tu ne le penses, plus forte que tu ne l'imagines. Je veux être là pour te rappeler tout ce dont tu es capable, et célébrer chacune de tes victoires, grandes ou petites."
        </p>
      </BookPage>

      {/* Page 12 - Chapitre 10 */}
      <BookPage >
        <div className="space-y-2">
          <h2 className="text-lg text-center text-[#6B4A5A]">
            10 / À TOI, QUAND LE MONDE VA TROP VITE
          </h2>
        </div>
        
        <div className="relative w-full h-[420px] my-3 overflow-hidden">
          <img
            src="/photos/photo11.jpg"
            alt="Mounira"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-sm leading-relaxed italic text-center mt-3">
          "Si un jour tu doutes de toi, relis ces mots : tu es une personne qui mérite le respect, la douceur et une affection sincère. Tu as le droit d'avancer à ton rythme, de rêver grand, de te reposer et de recommencer. Je serai heureux de t'encourager, sans jamais t'empêcher d'être pleinement toi."
        </p>
      </BookPage>

      {/* Page 13 - Chapitre 11 */}
      <BookPage >
        <div className="space-y-2">
          <h2 className="text-lg text-center text-[#6B4A5A]">
            11 / MA SARAUNIYATA, POUR DEMAIN
          </h2>
        </div>
        
        <div className="relative w-full h-[420px] my-3 overflow-hidden">
          <img
            src="/photos/photo12.jpg"
            alt="Mounira"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-sm leading-relaxed italic text-center mt-3">
          "Mon amour, je ne te promets pas une vie sans difficultés. Je te promets plutôt de faire de mon mieux pour communiquer avec sincérité, reconnaître mes erreurs, écouter ton cœur et construire avec toi quelque chose de solide. Pour moi, aimer, c'est choisir le respect et la complicité, même dans les jours ordinaires."
        </p>
      </BookPage>

      {/* Page 14 - Chapitre 12 */}
      <BookPage >
        <div className="space-y-2">
          <h2 className="text-lg text-center text-[#6B4A5A]">
            12 / LA DERNIÈRE PAGE... POUR L'INSTANT
          </h2>
        </div>
        
        <div className="relative w-full h-[420px] my-3 overflow-hidden">
          <img
            src="/photos/photo13.jpg"
            alt="Mounira"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-sm leading-relaxed italic text-center mt-3">
          "Mon bébé, mon amour, mon évidence... Ma Sarauniyata, si ce livre te donne ne serait-ce qu'un sourire, alors il aura déjà accompli quelque chose de beau. Garde-le comme un petit rappel : tu es aimée, tu es appréciée, et il y a quelqu'un qui a pris le temps de rassembler ces photos et ces mots spécialement pour toi."
        </p>
      </BookPage>

      {/* Page 15 - Aunty Fad */}
      <BookPage >
        <div className="space-y-3 text-center">
          <h2 className="text-2xl text-[#8B4867]">
            UN MOT POUR AUNTY FAD
          </h2>
          
          <p className="font-semibold">Aunty Fad,</p>

          <div className="space-y-2 text-sm leading-relaxed">
            <p>
              Je voulais aussi prendre un instant pour vous témoigner mon respect et mon affection. Vous êtes une personne formidable, et je sais que votre place dans la vie de ma Sarauniyata est précieuse.
            </p>

            <p>
              Merci pour la personne que vous êtes. Je vous souhaite sincèrement la santé, la paix, de belles joies et beaucoup de raisons de sourire. Que la vie vous rende toute la bonté que vous partagez autour de vous.
            </p>

            <p>
              Avec beaucoup de respect,<br />
              Une pensée pleine de gratitude. ♥
            </p>
          </div>
        </div>
      </BookPage>

      {/* Page 16 - Finale */}
      <BookPage >
        <div className="space-y-4 text-center">
          <h2 className="text-2xl text-[#8B4867]">
            LA SUITE RESTE À ÉCRIRE...
          </h2>
          
          <p className="italic text-[#8B4867]">
            À mon amour, mon évidence, mon bébé.
          </p>

          <p className="text-sm leading-relaxed">
            Ma Sarauniyata, aujourd'hui et dans les pages à venir :<br />
            <span className="italic">plus de complicité, plus de rires, plus de nous.</span>
          </p>

          <p className="text-xl italic text-[#8B4867]">
            Je t'aime. ♥
          </p>
        </div>
      </BookPage>

    </main>
  );
}
