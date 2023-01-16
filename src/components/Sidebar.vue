<script setup>
  import { ref } from 'vue'
  import {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
  } from '@headlessui/vue'
  import {
    Bars3BottomLeftIcon,
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'
  import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
  
  const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
  
  const sidebarOpen = ref(false)
  </script>

<template>
      <!-- Static sidebar for desktop -->
      <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-grow flex-col overflow-y-auto bg-white pt-5">
          <div class="flex flex-shrink-0 items-center px-4">
            <img class="h-8 w-auto" src="../assets/images/logo-tikilearning.svg" alt="Tikilearning-logo" />
          </div>
          <div class="mt-5 flex flex-1 flex-col">
            <nav class="flex-1 space-y-1 px-2 pb-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-white text-secondary' : 'text-black75 hover:text-secondary hover:bg-hover_sidebar', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
                <component :is="item.icon" class="mr-3 h-6 w-6 flex-shrink-0 text-black75 hover:text-secondary" aria-hidden="true" />
                {{ item.name }}
              </a>
            </nav>
          </div>
        </div>
      </div>
</template>