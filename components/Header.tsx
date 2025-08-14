@@ .. @@
 import { useState } from 'react';
 import { Button } from '@/components/ui/button';
 import { Menu, X } from 'lucide-react';
+import Image from 'next/image';

 const Header = () => {
@@ .. @@
           {/* Logo */}
           <div className="flex items-center space-x-2">
-            <img 
+            <Image 
               src="/lovable-uploads/55e76238-1068-48fc-8fcc-253e3bcb5566.png" 
               alt="KaLerato Holdings"
               className="h-8 w-auto"
+              width={120}
+              height={32}
             />
           </div>