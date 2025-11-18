import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Project {
  imageUrl: string;
  title: string;
  description: string;
}

interface Involvement {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  isMobileMenuOpen = signal(false);
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Projects', href: '#projects' },
    { label: 'Get Involved', href: '#involved' },
    { label: 'Impact', href: '#impact' },
  ];

  projects = signal<Project[]>([
    {
      imageUrl: 'https://picsum.photos/400/300?image=24',
      title: 'Education Program',
      description: 'Providing quality education and resources to underprivileged children, ensuring a brighter future.'
    },
    {
      imageUrl: 'https://picsum.photos/400/300?image=106',
      title: 'Health Camps',
      description: 'Organizing free health check-ups and medical assistance in remote areas for vulnerable communities.'
    },
    {
      imageUrl: 'https://picsum.photos/400/300?image=1078',
      title: 'Food Distribution',
      description: 'Fighting hunger by distributing nutritious meals to families and individuals facing food insecurity.'
    },
    {
      imageUrl: 'https://picsum.photos/400/300?image=1059',
      title: 'Women Empowerment',
      description: 'Supporting women with skill development and financial independence for a self-reliant life.'
    }
  ]);

  involvementOptions = signal<Involvement[]>([
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.99l-1.714 4.286a2 2 0 001.736 2.99zM7 20l-1.657-4.143A2 2 0 016.343 13H7v7z" /></svg>`,
      title: 'Volunteer',
      description: 'Join our team and dedicate your time to make a direct impact on the ground.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
      title: 'Partner With Us',
      description: 'Collaborate with us to create sustainable projects and amplify our collective impact.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>`,
      title: 'Donate Goods',
      description: 'Contribute essential goods like food, clothing, and educational materials for those in need.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>`,
      title: 'Sponsor a Child',
      description: 'Change a child\'s life by sponsoring their education, health, and well-being.'
    },
  ]);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(value => !value);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
