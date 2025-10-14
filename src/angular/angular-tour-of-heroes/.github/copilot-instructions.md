# Copilot Instructions - Angular Training App

## 🎯 Project Overview

This is an Angular 20 training application with **intentional bugs** for educational purposes. The app contains two main learning examples that demonstrate common Angular issues students need to debug.

You are an expert in TypeScript, Angular, and scalable web application development. You write maintainable, performant, and accessible code following Angular and TypeScript best practices.

## 🏗️ Architecture & Structure

### Component Organization
- **AppComponent**: Main container with Angular CLI template styling
- **Counter1Component**: Simple counter with increment/decrement (has bugs)
- **TaskListComponent**: Task management with add/remove functionality (has bugs)

### Key Files
- `src/app/app.module.ts`: Module configuration with FormsModule for two-way binding
- Components follow standard Angular pattern: `.ts`, `.html`, `.css` files per component
- No routing configured - single page application

## 🔧 Development Workflow

### Setup & Running
```bash
# Install dependencies (uses Yarn package manager)

utiliser des ligne de commandes fonctionnant avec PowerShell sous Windows

yarn install

# Start development server
npm start  # or ng serve
# Runs on http://localhost:4200

# Run tests
npm test   # Uses Karma + Jasmine

# Build for production
npm run build
```

### TypeScript Configuration
- **Strict mode enabled** in `tsconfig.json`
- TypeScript: 5.8.x (required for Angular 20)
- Target: ES2022
- Decorators enabled for Angular

### Angular 20 Breaking Changes
- Components are **standalone by default** - explicitly set `standalone: false` in `@Component` decorator for NgModule-based apps
- Configuration changes in `angular.json`: `browserTarget` → `buildTarget`
- All components in this project use `standalone: false` to maintain NgModule architecture

## 🐛 Known Issues (Training Purposes)

### Counter1Component Issues
- **Problem**: Increment/decrement buttons don't work
- **Root Cause**: `step` property is initialized to 0
- **Fix Location**: `src/app/counter1/counter1.component.ts` - initialize `step = 1`

### TaskListComponent Issues
1. **Add Task Button Not Working**
   - **Problem**: Uses `onclick` instead of Angular event binding
   - **Fix**: Change `onclick="addTask()"` to `(click)="addTask()"` in template
   
2. **Duplicate Task Addition**
   - **Problem**: `addTask()` method calls `push()` twice
   - **Fix**: Remove duplicate `this.tasks.push()` line

3. **Clear All Tasks Missing**
   - **Problem**: Button exists but no implementation
   - **Fix**: Add `clearAllTasks()` method and wire to button

4. **Input Not Cleared After Add**
   - **Enhancement**: Reset `newTask = ''` after successful addition

## 🎨 Styling Patterns
- Inline styles in `app.component.html` for demo purposes
- Individual component CSS files for component-specific styles
- Material Design inspired blue color scheme for primary styling

## 🧪 Testing Approach
- Basic component creation tests only
- No comprehensive testing suite (training environment)
- Use `ng test` for Karma-based unit testing

## 📝 Coding Conventions
- **Component Naming**: PascalCase for classes, kebab-case for selectors
- **File Structure**: Feature-based organization under `src/app/`
- **Two-way Binding**: Uses `[(ngModel)]` - requires FormsModule import
- **Event Handling**: Angular event binding syntax `(click)="method()"`
- **Standalone Components**: Angular 20 defaults to standalone, but this project uses `standalone: false` to maintain NgModule pattern for educational purposes

## 🚀 When Adding New Components
1. Use Angular CLI: `ng generate component component-name`
2. Register in `app.module.ts` declarations array
3. Follow existing pattern: separate HTML/CSS/TS files
4. Use component selector in `app.component.html` to display

## 🔍 Debugging Tips
- Check browser console for Angular errors
- Verify FormsModule import for form-related issues
- Use Angular DevTools browser extension
- Common issue: Template syntax errors (wrong event binding syntax)


## TypeScript Best Practices
- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain
## Angular Best Practices
- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.
## Components
- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
## State Management
- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead
## Templates
- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
## Services
- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection
