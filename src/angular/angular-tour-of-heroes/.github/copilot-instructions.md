# Copilot Instructions - Angular Training App

## 🎯 Project Overview
This is an Angular 16 training application with **intentional bugs** for educational purposes. The app contains two main learning examples that demonstrate common Angular issues students need to debug.

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
- Target: ES2022
- Decorators enabled for Angular

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
