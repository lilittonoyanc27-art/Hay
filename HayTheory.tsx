import React from 'react';
import { motion } from 'framer-motion';
import { 
  Info, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Sparkles, 
  Star, 
  BookOpen, 
  Eye,
  Box
} from 'lucide-react';

export default function HayTheory() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans p-4 md:p-8 overflow-x-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-4 bg-blue-600 rounded-3xl shadow-lg border-4 border-yellow-400 mb-6">
            <Eye className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-black uppercase tracking-tighter text-blue-600 italic mb-2">
            El Verbo <span className="text-cyan-500">HAY</span>
          </h1>
          <p className="text-2xl text-zinc-400 font-bold italic">
            Կա / Կան (There is / There are) — Տեսություն
          </p>
        </motion.header>

        {/* Main Concept */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-blue-600 rounded-[4rem] p-12 text-white shadow-2xl border-4 border-yellow-400 mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles className="w-48 h-48" />
          </div>
          
          <h2 className="text-4xl font-black uppercase mb-6 flex items-center gap-4">
            <Star className="w-10 h-10 text-yellow-400 fill-current" />
            Ի՞նչ է HAY-ը:
          </h2>
          <p className="text-2xl leading-relaxed font-medium opacity-90 italic">
            Իսպաներենում <b>"HAY"</b> բառը նշանակում է <b>"Կա"</b> կամ <b>"Կան"</b>: Այն օգտագործվում է, երբ ուզում ենք ասել, որ ինչ-որ բան գոյություն ունի մի տեղում:
          </p>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <p className="text-sm uppercase tracking-widest opacity-60 mb-2">Մեկ հատ (Singular)</p>
              <p className="text-3xl font-black">Hay <span className="text-yellow-400">un</span> gato.</p>
              <p className="text-lg opacity-80 italic mt-2">Կա մի կատու:</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <p className="text-sm uppercase tracking-widest opacity-60 mb-2">Շատ հատ (Plural)</p>
              <p className="text-3xl font-black">Hay <span className="text-yellow-400">muchos</span> gatos.</p>
              <p className="text-lg opacity-80 italic mt-2">Կան շատ կատուներ:</p>
            </div>
          </div>
        </motion.section>

        {/* The Secret Rule */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-zinc-50 rounded-[3rem] p-10 border-4 border-zinc-100 shadow-inner">
            <h3 className="text-2xl font-black text-blue-600 mb-4 flex items-center gap-3">
              <Info className="w-6 h-6" /> 1. Անփոփոխ բառ
            </h3>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Ի տարբերություն այլ բայերի, <b>HAY</b>-ը երբեք չի փոխվում: Այն նույնն է և՛ մեկ առարկայի, և՛ հազար առարկայի համար:
            </p>
            <div className="mt-6 p-4 bg-white rounded-2xl border-2 border-cyan-100 text-center">
              <p className="text-xl font-black text-cyan-600 italic">HAY = ԿԱ / ԿԱՆ</p>
            </div>
          </div>

          <div className="bg-zinc-50 rounded-[3rem] p-10 border-4 border-zinc-100 shadow-inner">
            <h3 className="text-2xl font-black text-cyan-500 mb-4 flex items-center gap-3">
              <XCircle className="w-6 h-6" /> 2. Ժխտում (No hay)
            </h3>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Եթե ուզում ենք ասել, որ ոչինչ չկա, պարզապես ավելացնում ենք <b>"NO"</b> բառը HAY-ից առաջ:
            </p>
            <div className="mt-6 p-4 bg-red-50 rounded-2xl border-2 border-red-100 text-center">
              <p className="text-xl font-black text-red-500 italic">NO HAY = ՉԿԱ / ՉԿԱՆ</p>
            </div>
          </div>
        </motion.section>

        {/* Examples with Visuals */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6 mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center shadow-md">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-zinc-800">
              Օրինակներ (Ejemplos)
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { sp: "¿Hay leche en la nevera?", hy: "Սառնարանում կա՞ կաթ:", icon: <HelpCircle className="text-blue-500" /> },
              { sp: "No hay nada aquí.", hy: "Այստեղ ոչինչ չկա:", icon: <XCircle className="text-red-500" /> },
              { sp: "Hay un libro sobre la mesa.", hy: "Սեղանի վրա կա մի գիրք:", icon: <CheckCircle2 className="text-emerald-500" /> },
              { sp: "Hay muchas flores en el jardín.", hy: "Այգում կան շատ ծաղիկներ:", icon: <Sparkles className="text-yellow-500" /> },
            ].map((item, i) => (
              <div key={i} className="bg-white border-4 border-zinc-100 p-8 rounded-[2.5rem] shadow-sm flex items-center gap-6 hover:border-blue-500 transition-all group">
                <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-3xl font-black text-zinc-800 italic group-hover:text-blue-600 transition-colors">"{item.sp}"</p>
                  <p className="text-xl font-bold text-zinc-400 italic mt-1">{item.hy}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Summary Box */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-cyan-500 rounded-[4rem] p-12 text-white text-center shadow-xl border-4 border-white"
        >
          <Box className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h3 className="text-4xl font-black uppercase mb-4">Հիշի՛ր</h3>
          <p className="text-xl font-medium opacity-90 italic max-w-2xl mx-auto">
            Իսպաներենում <b>"H"</b> տառը չի արտասանվում: Այնպես որ, <b>HAY</b> բառը կարդում ենք որպես <b>"ԱՅ"</b>:
          </p>
        </motion.div>

        {/* Footer */}
        <footer className="mt-20 text-center pb-12">
          <div className="inline-flex items-center gap-3 bg-zinc-100 px-8 py-3 rounded-full border border-zinc-200">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">
              Gramática Española: HAY v1.0
            </span>
          </div>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body { 
          font-family: 'Inter', sans-serif; 
          background: #ffffff;
        }
      `}} />
    </div>
  );
}
