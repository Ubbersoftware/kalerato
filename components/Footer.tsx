@@ .. @@
 import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
+import Image from 'next/image';

 const Footer = () => {
@@ .. @@
           <div className="lg:col-span-1">
             <div className="flex items-center space-x-2 mb-6">
-              <img 
+              <Image 
                 src="/lovable-uploads/55e76238-1068-48fc-8fcc-253e3bcb5566.png" 
                 alt="KaLerato Holdings"
                 className="h-8 w-auto"
+                width={120}
+                height={32}
               />
             </div>
             <p className="text-foreground/70 mb-6 leading-relaxed">