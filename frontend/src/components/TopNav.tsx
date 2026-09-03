"use client";

interface TopNavProps {
  userName?: string;
  avatarUrl?: string;
}

export default function TopNav({
  userName = "Sarah",
  avatarUrl = "",
}: TopNavProps) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-outline-variant/30 bg-surface px-4 md:px-6">
      <div>
        <h1 className="text-lg font-semibold text-on-surface">
          Dashboard
        </h1>

        <p className="text-sm text-on-surface-variant">
          Overview of your workspace
        </p>
      </div>

      <div className="flex items-center gap-10">

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface"
          aria-label="Search"
        >
          <span className="material-symbols-outlined">
            search
          </span>
        </button>

        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface"
          aria-label="Notifications"
        >
          <span className="material-symbols-outlined">
            notifications
          </span>

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-error" />
        </button>

        <div className="mx-2 h-8 w-px bg-outline-variant/30" />

        <button
          className="flex items-center gap-2 rounded-lg transition-opacity duration-200 hover:opacity-80"
          aria-label={`${userName} profile`}
        >
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={userName}
              className="h-9 w-9 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-on-primary">
              {userName.charAt(0).toUpperCase()}
            </div>
          )}

          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium text-on-surface">
              {userName}
            </p>

            <p className="text-xs text-on-surface-variant">
              Workspace
            </p>
          </div>
        </button>
      </div>
    </header>
  );
}