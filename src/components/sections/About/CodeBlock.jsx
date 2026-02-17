import React from "react";

const CodeBlock = () => {
  return (
    <div className="relative hidden lg:block">
      <div className="bg-[#1a1a1a] border border-[#8B8B8B]/30 rounded-xl overflow-hidden">
 
        <div className="flex items-center gap-2 px-4 py-3 bg-[#2a2a2a] border-b border-[#8B8B8B]/30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-[#909090] text-sm ml-2">AboutMe.jsx</span>
        </div>
        
        <pre className="p-4 text-sm font-mono overflow-x-auto">
          <code>
            <span className="text-purple-400">const</span>{' '}
            <span className="text-yellow-400">AboutMe</span>{' '}
            <span className="text-[#C4C4C4]">=</span>{' '}
            <span className="text-purple-400">()</span>{' '}
            <span className="text-[#C4C4C4]">=</span>{'>'} '{'\n'}
            {'  '}<span className="text-purple-400">return</span> {'('}{'\n'}
            {'    '}<span className="text-yellow-400">&lt;div</span>{' '}
            <span className="text-green-400">className</span>
            <span className="text-[#C4C4C4]">=</span>
            <span className="text-orange-400">"developer"</span>
            <span className="text-yellow-400">&gt;</span>{'\n'}
            {'      '}<span className="text-yellow-400">&lt;h1&gt;</span>
            <span className="text-[#C4C4C4]">Passionate Creator</span>
            <span className="text-yellow-400">&lt;/h1&gt;</span>{'\n'}
            {'      '}<span className="text-yellow-400">&lt;p&gt;</span>{'\n'}
            {'        '}<span className="text-[#C4C4C4]">Building the web,</span>{'\n'}
            {'        '}<span className="text-[#C4C4C4]">one component at a time</span>{'\n'}
            {'      '}<span className="text-yellow-400">&lt;/p&gt;</span>{'\n'}
            {'    '}<span className="text-yellow-400">&lt;/div&gt;</span>{'\n'}
            {'  '}<span className="text-[#C4C4C4]">);</span>{'\n'}
            <span className="text-[#C4C4C4]">{'}'}</span>
          </code>
        </pre>
      </div>

      <div className="absolute -top-6 -right-6 w-20 h-20 border-2 border-[#C4C4C4]/20 rounded-full"></div>
      <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#C4C4C4]/10 rounded-full"></div>
    </div>
  );
};

export default CodeBlock;