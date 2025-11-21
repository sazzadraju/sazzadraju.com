'use client';

import Link from "next/link";
import { profile } from "@/data/profile";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <div className="hidden md:flex gap-6 text-sm items-center">
          <Link href="/" className="hover:text-slate-800 transition">Home</Link>
          <Link href="/#about" className="hover:text-slate-800 transition">About</Link>
          <Link href="/projects" className="hover:text-slate-800 transition">Projects</Link>
          <Link href="/#experience" className="hover:text-slate-800 transition">Experience</Link>
          <Link href="/blog" className="hover:text-slate-800 transition">Blog</Link>
          <Link href="/#contact" className="hover:text-slate-800 transition">Contact</Link>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Link href={profile.linkedin} target="_blank" className="text-gray-600 hover:text-slate-800 transition p-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </Link>
          <Link href="https://facebook.com/sazzadraju" target="_blank" className="text-gray-600 hover:text-slate-800 transition p-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </Link>
          <ContactModal />
          <Link href="/resume.pdf" target="_blank" className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition text-xs font-semibold">Download Resume</Link>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <Link href={profile.linkedin} target="_blank" className="text-gray-600 hover:text-slate-800 transition p-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </Link>
          <Link href="https://facebook.com/sazzadraju" target="_blank" className="text-gray-600 hover:text-slate-800 transition p-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </Link>
        </div>
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b md:hidden">
            <div className="flex flex-col gap-4 p-6 text-sm">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-slate-800 transition">Home</Link>
              <Link href="/#about" onClick={() => setIsOpen(false)} className="hover:text-slate-800 transition">About</Link>
              <Link href="/projects" onClick={() => setIsOpen(false)} className="hover:text-slate-800 transition">Projects</Link>
              <Link href="/#experience" onClick={() => setIsOpen(false)} className="hover:text-slate-800 transition">Experience</Link>
              <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-slate-800 transition">Blog</Link>
              <Link href="/#contact" onClick={() => setIsOpen(false)} className="hover:text-slate-800 transition">Contact</Link>
              <div className="pt-2">
                <ContactModal />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
