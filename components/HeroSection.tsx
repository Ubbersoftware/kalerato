@@ .. @@
 import { Button } from '@/components/ui/button';
 import { Play } from 'lucide-react';
-import heroImage from '@/assets/hero-billboard.jpg';
+import Image from 'next/image';

 const HeroSection = () => {
@@ .. @@
     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Background Image with Overlay */}
       <div className="absolute inset-0 z-0">
-        <img 
-          src={heroImage}
+        <Image 
+          src="/assets/hero-billboard.jpg"
           alt="Digital billboard advertising"
           className="w-full h-full object-cover"
+          fill
+          priority
         />
         <div className="absolute inset-0 bg-gradient-hero"></div>
       </div>